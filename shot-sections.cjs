const http = require('http');
const fs = require('fs');

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
  const page = targets.find(t => t.url === 'about:blank') || targets.find(t => t.type === 'page' && !t.url.startsWith('edge://'));
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
    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && pending.has(msg.id)) {
        const { resolve, reject } = pending.get(msg.id);
        pending.delete(msg.id);
        if (msg.error) reject(msg.error);
        else resolve(msg.result);
      }
    };
    await send('Page.enable');
    await send('Page.navigate', { url: 'https://kazitahmidurrahman01-boop.github.io/tooth-cure-dental-clinic/' });
    await new Promise(r => setTimeout(r, 4000));
    // Scroll down to Gallery
    await send('Runtime.evaluate', { expression: 'document.getElementById(\"cases\").scrollIntoView()' });
    await new Promise(r => setTimeout(r, 2000));
    const shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:/Users/Tahmidur Rahman/.gemini/antigravity/brain/abafc17e-883a-4f97-8f6b-a4e586e332dd/gallery-shot.png', Buffer.from(shot.data, 'base64'));
    console.log('Gallery shot saved!');

    // Also scroll down to Doctors
    await send('Runtime.evaluate', { expression: 'document.getElementById(\"doctors\").scrollIntoView()' });
    await new Promise(r => setTimeout(r, 2000));
    const shot2 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:/Users/Tahmidur Rahman/.gemini/antigravity/brain/abafc17e-883a-4f97-8f6b-a4e586e332dd/doctors-shot.png', Buffer.from(shot2.data, 'base64'));
    console.log('Doctors shot saved!');

    ws.close();
    process.exit(0);
  };
}
run().catch(console.error);
