const http=require('http');


function handler(req,res){
    
    const path=req.url;
    
    res.end();
}


const server=http.createServer(handler);

server.listen(3000);