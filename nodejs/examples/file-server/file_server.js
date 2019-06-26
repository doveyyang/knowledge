'use strict'

var 
    fs = require("fs"),
    url = require("url"),
    path = require("path"),
    http = require("http");

// 从命令行参数获取root目录，默认是当前目录
var root = path.resolve(process.argv[2] || '.');

console.log('Static Root Dir:',root)

// 创建服务器
var server = http.createServer(function(request,response){
    // 获取URL的path
    let pathname = url.parse(request.url).pathname;

    // 获取到本地路径
    let filename = path.join(root,pathname);

    // 获取文件状态
    fs.stat(filename,function(err,stats){
        // 如果没有出错且文件存在
        if(!err && stats.isFile()){
            console.log('200',request.url)
            
            // 发送200响应
            response.writeHead(200);

            fs.createReadStream(filename).pipe(response);
        }else{
            console.log('404 ',request.url);
            response.writeHead(404);
            response.end("404 NotFound");
        }
    })
    
});
server.listen(3000);

console.log("server is running at http://127.0.0.1:3000")