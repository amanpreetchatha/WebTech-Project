var express=require('express');
const bodyParser=require('body-parser');

var app=express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/name',function(req,res){
    res.write(`<h1>This is a GET request.<br>Date is ${Date()}</h1>`);
    res.end();
});
app.get('/hello',function(req,res){
    res.write(`<h1>Hello ${name}, I hope you are doing great!</h1>`);
    res.end();
});

app.post('/',function(req,res){
    res.write(`<h1>This is a POST request.<br>Date is ${Date()}</h1>`);
    res.end();
    
});
app.put('/',function(req,res){
    res.write(`<h1>This is a PUT request.<br>Date is ${Date()}</h1>`);
    res.end();
});
app.delete('/',function(req,res){
    res.write(`<h1>This is a DELETE request.<br>Date is ${Date()}</h1>`);
    res.end();
});

app.listen(80);