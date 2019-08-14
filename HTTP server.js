const http=require('http');
const fs=require('fs');

let team=[];

function handler(req,res){
    
    if(req.method==='GET'){
        if(req.url==='/team'){
            if(team.length!=0){
                res.write("<h1>Team Members</h1>");
                res.write(`<li>${team}</li>`);
                res.end();    
            }
            else{
                res.write('<h2>No members in the team</h2>');
                res.end();
            }
            
        }
        else{
            file=fs.readFileSync('./index.html');
            res.write(file);
            res.end();
        }
    }else if(req.method==="POST"){
        let body;
        req.on('data',data=>{
            name=data.toString();
            console.log(data.toString());
            team.push(name.slice(name.indexOf('=')+1,name.length));
            
        });
        res.write('<h2>Member added to the team</h2><br><a href="/team">View Members</a>');
        res.end();
        /*
        if(member.length!=0){
            team.push(member);
            res.write('<h3>Member added</h3>');
            res.end();
        }*/
        
        res.end();
    }
    
    res.end();
}


const server=http.createServer(handler);

server.listen(80);