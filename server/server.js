
import express from 'express'
import path from 'path'
import App from '../src/App'
import React from 'react'
import {renderToString} from 'react-dom/server'

const app = express()
const html = renderToString(<App / >)

app.use('/static',express.static(path.resolve('./src')))
app.get('/',(req,res)=>{
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <link rel="stylesheet" src="/static/app.css">
      </head>
      <body>
        ${html}
      </body>
    </html>
    `)
})
app.listen(5003,()=>{
  console.log('server is running on port 5003');
})