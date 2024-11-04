const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use(express.static('public'))

app.listen(3000, () => {
    console.log('Proxy server running on http://localhost:3000');

})