const koa=require('koa');
const path=require('path');
const combineRouters=require('koa-combine-routers');//管理routers
const bodyparser=require('koa-bodyparser');//请求体处理
const koaStatic=require('koa-static');//静态文件处理
const compress=require('koa-compress');//压缩
const userRouter=require('../router/userRouter');//

//整合router
const unifiedRouters=combineRouters(userRouter)();

const app=new koa();

//压缩模块
app.use(compress({
    threshold:2048
}));
//将请求体重对象转换为对象
app.use(bodyparser());
//处理静态文件
app.use(koaStatic(path.join(__dirname,'../dist')))


//处理router
app.use(unifiedRouters);

//导出
module.exports=app;