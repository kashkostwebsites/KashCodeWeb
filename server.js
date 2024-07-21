const fs = require('fs');
const http = require('http');

fs.readFile('index.html', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    const server = http.createServer((req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data); // Send the file content as the response
    });

    server.listen(8080, () => {
      console.log('Server listening on port 8080');
    });
  }
});
