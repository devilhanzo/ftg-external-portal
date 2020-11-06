const express = require('express');
const path = require('path');
//const { createProxyMiddleware } = require('http-proxy-middleware');
//var requestProxy = require("express-request-proxy");


const app = express();
// app.use(
//     '/ip',
//     createProxyMiddleware({
//       target: 'http://10.99.0.49:50453',
//       changeOrigin: true,
//     })
//   );

app.use('/static', express.static(path.join(__dirname, 'static')));
app.get('*',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname, 'index.html'));
})

module.exports = app;