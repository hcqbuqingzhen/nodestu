const userRedisDao=require('../dao/redis/userRedisDao');

class userService  {
    //存
    async storeUserId(userSessionId,userID){
        await userRedisDao.storeUserId(userSessionId,userID);
    };
    //取
    async getUserId(userSessionId){
        return await userRedisDao.getUserId(userSessionId);
    }
    //重置
    async resetUserSessionId(userSessionId){
        await userRedisDao.resetUserSessionId(userSessionId);
    }
    //删除
    async removeUserSessionId(userSessionId){
        await userRedisDao.removeUserSessionId(userSessionId);
    }
}

module.exports=new userService();