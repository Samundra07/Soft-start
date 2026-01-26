#!/usr/bin/env node
/**
 * Simple HTTP Server
 * Creates a basic web server that responds to HTTP requests.
 */

const http = require('http');

const PORT = 3000;
const HOST = 'localhost';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    
    if (req.url === '/') {
        res.end('<h1>Welcome to the Simple Server!</h1>');
    } else if (req.url === '/about') {
        res.end('<h1>About Page</h1><p>This is a simple HTTP server built with Node.js</p>');
    } else {
        res.statusCode = 404;
        res.end('<h1>404 - Page Not Found</h1>');
    }
});

server.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
    console.log('Press Ctrl+C to stop the server');
});
