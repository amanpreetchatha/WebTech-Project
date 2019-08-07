const http=require("http");
var express=require('express');
var app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(function(req,res,next){
    
});


app.get('/',function(req,res){
    res.send('Hello World');
});
app.post('/',function(req,res){
    res.send('<h1>Hello World from Post</h1>');
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
app.listen(3000);