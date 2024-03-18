import { createServer } from 'http';
import { readFile,createReadStream } from 'fs';
const server=createServer();
// server.on("request",(req,res)=>{
//     readFile("input.txt",(err,data)=>{
//         if (err)
//         return console.log(err);
//         res.end(data.toString());
//     });
// })

server.on('request',(req,res)=>{
const rstream=createReadStream("test.txt");
rstream.on("data",(chunk)=>{
    res.write(chunk);
})
rstream.on("error",()=>{
    res.write("File not found");
    console.log("error");
})
rstream.on("end",()=>{
    res.end();
});
});
server.listen(8000,"127.0.0.1");