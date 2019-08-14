const http=require('http');
const fs=require('fs');
const {parse}=require('querystring');
let members= [];

function handler(req,res){
    
    if(req.method==='GET'){
        res.write("<h1>This is a GET request</h1>");
    }else if(req.method==='POST'){
        res.write("<h1>This is a POST request</h1>");
    }else if(req.method==='PUT'){
        res.write("<h1>This is a POST request</h1>");
    }
    else if(req.method='DELETE'){
        res.write("<h1>This is a POST request</h1>");
    }
    res.end();
    
}


const server=http.createServer(handler);

server.listen(80);

