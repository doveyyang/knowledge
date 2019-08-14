'use strict'
 var fs = require('fs')

//  打开一个流
var rstream = fs.createReadStream("./output2.txt",'utf-8')

rstream.on('data',function(chunk){
    console.log(`Data:${chunk}`)
});

rstream.on('end',function(){
    console.log("end!")
});

rstream.on("error",function(err){
    console.log(`Error:${err}`)
})
