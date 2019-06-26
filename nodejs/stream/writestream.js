var fs = require('fs')

var wstream = fs.createWriteStream("../template/index.txt",'utf-8')

wstream.write('使用wstream写入文本数据')
wstream.write('END.')
wstream.end()

var ws2 = fs.createWriteStream("output2.txt")
ws2.write(new Buffer("使用流方式写入二进制数据",'utf-8'))
ws2.write(new Buffer("END.",'utf-8'))
ws2.end();

