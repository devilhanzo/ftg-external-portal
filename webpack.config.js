// webpack.config.js
const path = require('path');
module.exports = {
    entry: path.resolve('./server/server.js'), /* ไฟล์เซิฟเวอร์ที่เราจะแปลงจาก JSX เป็น Javascript ธรรมดา */
    output: {
      path: path.resolve('./server'), /* ที่อยู่ไฟล์ที่เราแปลงเสร็จแล้ว */ 
      filename: 'server.build.js', /* ไฟล์ที่แปลงแล้ว */
    },
    module: {
      rules: [ /* ตัว loader ทั้งหลาย*/
        {
          test: /\.js/,
          exclude: /node_module/,
          loaders: [
            'babel-loader',
          ],
        },
      ],
    },
    target:'node', /* ตัวนี้ใส่มาเพื่อให้เราสามารถใช้ express ได้ */
  }