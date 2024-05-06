// import { add, multiply } from './utils.js';
let {add,multiply}=require('./module.js');

console.log(add(2, 3)); // Output: 5
console.log(multiply(2, 3)); // Output: 6

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);