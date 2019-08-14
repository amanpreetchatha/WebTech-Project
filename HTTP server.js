const http=require('http');
const fs=require('fs');
var team={ name:'', members: []}

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
        if(req.url==='/create'){
            
            req.on('data',data=>{
                name=data.toString();
                
                team.name=name.slice(name.indexOf('=')+1,name.length);
                
                
            });
            res.end();
            console.log(team.name);
            
            
            
                
        }
        /*
        if(member.length!=0){
            team.push(member);
            res.write('<h3>Member added</h3>');
            res.end();
        }*/
        
        
    }else if(req.method='DELETE'){
            if(req.url='/deleteteam'){
                req.on('data',data=>{
                    name=data.toString();
                    
                    team.name=name.slice(name.indexOf('=')+1,name.length);
                    
                    
                });
                res.end();
                console.log(team.name);
                

        }
    }
    res.end();
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