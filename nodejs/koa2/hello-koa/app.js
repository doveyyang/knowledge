// 导入koa 导入的是一个class。用大写
// import Koa from "koa";
const Koa = require('koa')

// 创建一个Koa对象标示web app本身
const app = new Koa();
app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
    await next(); // 调用下一个middleware
});

app.use(async (ctx, next) => {
    const start = new Date().getTime(); // 当前时间
    await next(); // 调用下一个middleware
    const ms = new Date().getTime() - start; // 耗费时间
    console.log(`Time: ${ms}ms`); // 打印耗费时间
});

app.use(async (ctx, next) => {
    const start = new Date().getTime();
    await next();
    const ms = new Date().getTime() - start;
    console.log(`${ctx.request.method} ${ctx.request.url}: ${ms}ms`);
    ctx.response.set('X-Response-Time', `${ms}ms`);
});

app.use(async(ctx,next)=>{
    await next();
    console.log(ctx.request)
    console.log(ctx.response)
    
    // ctx是由koa传入的封装了request和response的变量，我们可以通过它访问request和response
    // next是koa传入的将要处理的下一个异步函数
    ctx.response.type = "text/html";
    ctx.response.body = '<h1>Hello,Koa2!</h1>';
});

app.listen(3000);
console.log('app started at port 3000...');
