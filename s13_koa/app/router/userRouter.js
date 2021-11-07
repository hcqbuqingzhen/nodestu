const Router=require('@koa/router');
const userRouter=new Router;
const userController=require('../controller/userController');
const userServerUrlResolver=require('../config/server/userServerUrlResolver');

//映射关系
userRouter.post(userServerUrlResolver.login,userController.login);
//导出
module.exports=userRouter;