import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import compression from 'compression';
import mongoose from 'mongoose';
import router from './routers';

const app=express();
app.use(cors({
    credentials:true,
}));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
const server=http.createServer(app);
server.listen(8080,()=>{
    console.log('Server running on http://localhost:8080/');
});
const MONGO_URL="mongodb+srv://ravindar:ravindar@cluster0.eoem4fz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.Promise=Promise;
mongoose.connect(MONGO_URL);
console.log("connection is establishing.......");
mongoose.connection.on('error',(error:Error)=>console.log("connection-error",error));
console.log("connection established successfully");
app.use('/',router());
