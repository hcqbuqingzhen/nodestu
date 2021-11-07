const userService=require('../server/userService');
const uuid=require('uuid');


//控制代码
//登录
class UserController{
    async userLogin(username,password){
        const userId=username;
        const userSessionId=await uuid.v1();
        await userService.storeUserId(userSessionId,userId);
        return userSessionId;
    }
    //登出
    async userLogout(userSessionId){
        await userService.removeUserSessionId(userSessionId);
    }

    //查询并重置

    async userOperation(userSessionId){
        const userId=await userService.getUserId(userSessionId);

        console.log('user click '+userId);
        //重置回话
        await userService.resetUserSessionId(userSessionId);
    }
}

module.exports=new UserController();