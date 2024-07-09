const http = require('http');
const httpProxy = require('http-proxy');

// create a proxy server
const proxy = httpProxy.createProxyServer({});

// create an HTTP server
const server = http.createServer((req,res)=>{
    console.log(`Proxying request for: ${req.url}`);

    // forward the request to the target server
    proxy.web(req , res , {target : 'http://example.com'});
});

// handling the errors

proxy.on('error' , (err,req,res)=>{
    res.writeHead(500 , {
        'Content-Type' : 'text/plain'
    });
    res.end('Something went wrong. And we are reporting a custom error message.');
});

// start the server
server.listen(3000 , ()=>{
    console.log('Proxy server running at port 3000');
});