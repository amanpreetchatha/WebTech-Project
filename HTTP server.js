const http=require('http');

function handler(req,res){
    
    res.setHeader('Content-Type','text/html')
    if(req.method==='GET'){
        res.write("<h1>This is a GET request</h1>");
    }else if(req.method==='POST'){
        res.write("<h1>This is a POST request</h1>");
    }else if(req.method==='PUT'){
        res.write("<h1>This is a PUT request</h1>");
    }
    else if(req.method='DELETE'){
        res.write("<h1>This is a DELETE request</h1>");
    }
    res.end();
    
}


const server=http.createServer(handler);

server.listen();

