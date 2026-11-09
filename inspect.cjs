const fs = require('fs');
const http = require('http');

async function getJSON(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });
}

async function run() {
  const targets = await getJSON('http://127.0.0.1:9333/json');
  console.log('Targets:', targets.map(t => ({ title: t.title, url: t.url, type: t.type })));
  const page = targets.find(t => t.url === 'about:blank') || targets.find(t => t.type === 'page' && !t.url.startsWith('edge://'));
  if (!page) {
    console.error('No page target found');
    return;
  }

  const ws = new WebSocket(page.webSocketDebuggerUrl);
  let id = 1;
  const pending = new Map();

  function send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const msgId = id++;
      pending.set(msgId, { resolve, reject });
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  }

  ws.onopen = async () => {
    console.log('Connected to CDP');
    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && pending.has(msg.id)) {
        const { resolve, reject } = pending.get(msg.id);
        pending.delete(msg.id);
        if (msg.error) reject(msg.error);
        else resolve(msg.result);
      }
      if (msg.method === 'Network.responseReceived') {
        const res = msg.params.response;
        if (res.url.includes('images/') || res.url.includes('.jpg') || res.url.includes('.webp') || res.status >= 400) {
          console.log('[NET ' + res.status + '] ' + res.url);
        }
      }
    };

    await send('Network.enable');
    await send('Page.enable');

    console.log('Navigating to target page...');
    await send('Page.navigate', { url: 'https://kazitahmidurrahman01-boop.github.io/tooth-cure-dental-clinic/' });

    await new Promise(r => setTimeout(r, 6000));

    // Evaluate image states
    const evalRes = await send('Runtime.evaluate', {
      expression: 'Array.from(document.querySelectorAll("img")).map(img => ({ src: img.src, complete: img.complete, naturalWidth: img.naturalWidth, naturalHeight: img.naturalHeight, alt: img.alt }))',
      returnByValue: true
    });
    console.log('--- IMAGES EVALUATION ---');
    console.log(JSON.stringify(evalRes.result.value, null, 2));

    const shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:/Tooth Cure Dental Website/live-shot.png', Buffer.from(shot.data, 'base64'));
    console.log('Screenshot saved to live-shot.png');

    ws.close();
    process.exit(0);
  };
}

run().catch(console.error);
