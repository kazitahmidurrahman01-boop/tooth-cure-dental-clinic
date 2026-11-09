const http = require('http');

async function main() {
  // Query targets from CDP
  http.get('http://127.0.0.1:9222/json', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', async () => {
      try {
        const targets = JSON.parse(data);
        console.log('Targets found:', targets.length);
        const target = targets.find(t => t.type === 'page');
        if (!target) {
          console.log('No page target found');
          return;
        }
        console.log('Page URL:', target.url);
        
        // Connect to WebSocket using native or basic WS
        // Or query target via HTTP endpoint
      } catch (e) {
        console.error('Error:', e);
      }
    });
  }).on('error', (err) => {
    console.error('CDP connect error:', err.message);
  });
}
main();
