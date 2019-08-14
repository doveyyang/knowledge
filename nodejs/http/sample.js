'use strict'

var http = require("http")

// 创建http server 并传入回调函数
var server = http.createServer(function(req,res){
    // 回调函数中的request和response对象
    console.log(`Method:${req.method}`)
    console.log(`Url:${req.url}`)
    res.writeHead(200,{
        'Content-Type':'text/html'
    })
    res.end(JSON.stringify({name:'dovey',age:18}))
})
server.listen(3000)

console.log("server is running at http://127.0.0.1:3000/");