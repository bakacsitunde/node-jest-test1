// 1. Beimportáljuk a beépített 'http' modult
const http = require('http');

// 2. Meghatározzuk a szerver címét és a portot
const hostname = '127.0.0.1';
const port = 3000;

// 3. Létrehozzuk a szervert
const server = http.createServer((req, res) => {
  // Beállítjuk a válasz fejlécét (státuszkód: 200 OK, típus: szöveg)
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  
  // A válasz tartalma
  res.end('Helló! Ez egy futó Node.js szerver válasza.\n');
});

// 4. Elindítjuk a figyelést a megadott porton
server.listen(port, hostname, () => {
  console.log(`A szerver fut: http://${hostname}:${port}/`);
});