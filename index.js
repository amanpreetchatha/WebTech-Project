const http=require('http');
var express=require('express');
const bodyParser=require('body-parser');
const fs=require('fs');

var app=express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/',function(req,res){
    file=fs.readFileSync('./index.html')
    res.write(file);
    res.end();
});
app.post('/index.js',function(req,res){
    //res.send(`<h1>Hello ${req.body} </h1>`);
    console.log("in the post method");
    res.send(`<h1>Hello ${req.body.username}</h1>`)
    console.log(req.body);
    res.end();
    
});
app.put('/',function(req,res){
    res.send('<h1>Hello World from Put</h1>');
});
app.delete('/',function(req,res){
    res.send('<h1>Hello World from Delete</h1>');
});

/*const data={firstName: 'Amanpreet', lastName: 'Chatha'};
const site=http.createServer(function(req,res){
    console.log("hello world");
    res.setHeader("Content-Type",'text/html');
    res.write('I am a html response<br>');
    res.write(JSON.stringify(data));
    res.end('<h1>Hello World!</h1>');
    console.log(req.headers);

})*/
app.listen(80);