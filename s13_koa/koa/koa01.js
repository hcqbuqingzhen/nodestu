const koa=require('koa');
const app=new koa;
app.use(async (ctx ,next)=>{
    console.log('next01 in');
    await next();
    console.log('next01 out');
});
app.use(async (ctx ,next)=>{
    console.log('next02 in');
    await next();
    console.log('next02 out');
});
app.use(async (ctx ,next)=>{
    console.log('next03 in');
    await next();
    console.log('next03 out');
});

app.use(async ctx=>{
    ctx.body='hello im koa';
});

app.listen(3000);