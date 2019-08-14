const http=require('http');
const fs=require('fs');
let members= [];

function handler(req,res){
    
    if(req.method==='GET'){
        if(members.length!=0){
            res.write("<h1>Team Members</h1>");
            forEach(mem , members)
            res.write(`<li>${mem}</li>`);
            res.end();    
        }
        else{
            file=fs.readFileSync('index.html');
            res.write(file);
            res.end();
        }
    }else if(req.method==='POST' || req.method==='PUT'){
        req.on('data',data=>{
            name=data.toString();
            members.push(name.slice(name.indexOf('=')+1,name.length));
            res.write(members.length);
        });
        res.end();
        console.log(members);
    }
    else if(req.method='DELETE'){
        req.on('data',data=>{
            name=data.toString();
            if(i=members.indexOf(name.slice(name.indexOf('=')+1,name.length))!=-1){
               delete members[i];
           }            
        });
        res.end();
        console.log(members);
    }
}


const server=http.createServer(handler);

server.listen(80);


function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }