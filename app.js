const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');


const app = express();
app.use(
    '/fgtauth',
    createProxyMiddleware({
      target: 'http://gateway.kkh.go.th:1001',
      changeOrigin: true,
    })
  );
app.use('/static', express.static(path.join(__dirname, 'static')));
app.get('*',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname, 'index.html'));
})

module.exports = app;