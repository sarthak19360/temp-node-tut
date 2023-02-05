const http = require('http');

const server = http.createServer((req,res)=> { //request to the server,response from the server
    if(req.url ==='/') {
        res.end('Welcome to my homepage, hope you have fun :)');
    }
    if(req.url ==='/about') {
        res.end('This is our brief history');
    }
    res.end(
        `<h1>Oops!!!</h1>
        <p>Sorry, we can't seem to find the page you are looking for</p>
        <a href="/">back home</a>`
    );
})

server.listen('5000');