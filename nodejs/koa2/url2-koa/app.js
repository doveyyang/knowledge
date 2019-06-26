// 导入koa 导入的是一个class。用大写
// import Koa from "koa";
const Koa = require('koa')
const fs = require('fs')

const router = require("koa-router")();

const bodyParser = require("koa-bodyparser");

// 创建一个Koa对象标示web app本身
const app = new Koa();
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`); // 打印URL
    await next(); // 调用下一个middleware
});

function addMapping(router, mapping) {
    console.log(mapping)
    for (var url in mapping) {
        if (url.startsWith('GET ')) {
            var path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);
        } else if (url.startsWith('POST ')) {
            var path = url.substring(5);
            router.post(path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        } else {
            console.log(`invalid URL: ${url}`);
        }
    }
}

function addControllers(router) {
    var files = fs.readdirSync(__dirname + '/controllers');
    var js_files = files.filter((f) => {
        return f.endsWith('.js');
    });

    for (var f of js_files) {
        console.log(`process controller: ${f}...`);
        let mapping = require(__dirname + '/controllers/' + f);
        addMapping(router, mapping);
    }
}

addControllers(router);

// 添加body解析
app.use(bodyParser())
// 添加路由中间件
app.use(router.routes())

app.listen(3000);
console.log('app started at port 3000...');
