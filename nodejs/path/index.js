'use strict'

var path = require("path")

// 解析当前目录
var workDir = path.resolve(".")
console.log("current Dir:",workDir)

var filePath = path.join(workDir,"pub",'index.html')
console.log("filePath",filePath)