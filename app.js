const express = require('express');
const path = require('path');
var proxy = require('express-http-proxy');
// const httpProxy = require('http-proxy');
// const proxy = httpProxy.createProxyServer({
//     // ssl: true,
//      secure: false
//   });
const app = express();

// app.all('/api', (req, res) => {
//     const options = {
//       target: 'http://10.99.0.49:50453'
//     };
//     proxy.web(req, res, options);
//   });
app.use('/proxy', proxy('http://10.99.0.49:50453'));
app.use('/api', proxy('gateway.kkh.go.th:5003'),{
    https: true
});
  
//   proxy.on('error', (err, req, res) => {
//     console.log('Proxy server error: \n', err);
//     res.status(500).json({ message: err.message });
//   });

app.use('/static', express.static(path.join(__dirname, 'static')));
app.get('*',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname, 'index.html'));
})

module.exports = app;