// url 模块

var url  = require("url")
console.log(url.parse("https://www.liaoxuefeng.com/wiki/1022910821149312/1023025830950720?query=string#hash"))
console.log(url.parse("http://user:pass@host.com:8080/path/to/file?query=string#hash"))

// Url {
//     protocol: 'https:',  
//     slashes: true,
//     auth: null,
//     host: 'www.liaoxuefeng.com',
//     port: null,
//     hostname: 'www.liaoxuefeng.com',
//     hash: '#hash',
//     search: '?query=string',
//     query: 'query=string',
//     pathname: '/wiki/1022910821149312/1023025830950720',
//     path: '/wiki/1022910821149312/1023025830950720?query=string',
//     href:
//      'https://www.liaoxuefeng.com/wiki/1022910821149312/1023025830950720?query=string#hash' }720?query=string#hash' }
// }

// Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: 'user:pass',
//     host: 'host.com:8080',
//     port: '8080',
//     hostname: 'host.com',
//     hash: '#hash',
//     search: '?query=string',
//     query: 'query=string',
//     pathname: '/path/to/file',
//     path: '/path/to/file?query=string',
//     href:
//      'http://user:pass@host.com:8080/path/to/file?query=string#hash'
//   }