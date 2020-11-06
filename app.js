const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');


const app = express();
app.use(
    '/fgtauth',
    createProxyMiddleware({
      target: 'http://10.99.0.49:50453/ip/hotspot/active',
      changeOrigin: true,
    })
  );
app.use('/static', express.static(path.join(__dirname, 'static')));
app.get('*',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname, 'index.html'));
})

module.exports = app;