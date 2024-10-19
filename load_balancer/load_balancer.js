const express = require('express');
const httpProxy = require('http');
const app = express();

const servers = [
  { host: 'localhost', port: 3001 },
  { host: 'localhost', port: 3002 },
  { host: 'localhost', port: 3003 },
];

let currentIndex = 0;

// Middleware to forward requests to one of the backend servers
app.use((req, res) => {
  const targetServer = servers[currentIndex];
  console.log(req)
  
  // Forward the request to the target server using http proxy
  const proxy = httpProxy.request(
    { host: targetServer.host, port: targetServer.port, path: req.url, method: req.method, headers: req.headers },
    (proxyRes) => {
      res.writeHead(proxyRes.statusCode, proxyRes.headers);
      proxyRes.pipe(res);
    }
  );

  // Forward the body of the request to the target server
  req.pipe(proxy);

  // Round-robin logic to balance requests across servers
  currentIndex = (currentIndex + 1) % servers.length;
});

// Start the load balancer on port 3000
app.listen(3000, () => {
  console.log('Load balancer is running on port 3000');
});
