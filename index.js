const http=require("http");
const data={firstName: 'Amanpreet', lastName: 'Chatha'};
const site=http.createServer(function(req,res){
    console.log("hello world");
    res.setHeader("Content-Type",'text/html');
    res.write('I am a html response<br>');
    res.write(JSON.stringify(data));
    res.end('<h1>Hello World!</h1>');
    console.log(req.headers);

});
site.listen(3000);