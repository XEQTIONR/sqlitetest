const { createServer } = require('node:http');
const Database = require('better-sqlite3')

const db = new Database('foobar.db', { verbose: console.log })

const stmt0 = db.exec('CREATE TABLE cats(id INT, name VARCHAR(50))')


const stmt1 = db.exec("INSERT INTO cats(id, name) VALUES (1, 'Snowy'), (2, 'Cloudy'), (3, 'Rainy'), (4, 'Sunny')")
const stmt2 = db.prepare("SELECT * FROM cats")

const cats = stmt2.all()

console.log('cats are:', cats)
console.log('length:', cats.length)

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

