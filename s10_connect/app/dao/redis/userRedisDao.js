const Redis=require('ioredis');
const redisKeyPrefix='myRedis:info:user';

class UserRedisDao {
    getRedisConnection(){
        return new Redis({
            host:'localhost',
            part:'6378'
        });
    }

    async storeUserId(userSessionId,userID){
        const redis=this.getRedisConnection();
        redis.set(redisKeyPrefix+userSessionId,userID,'ex',1800,(error,result)=>{
            redis.quit();
            console.log(result);
        });
    }

    async getUserId(userSessionId){
        const redis=this.getRedisConnection();
        return redis.get(redisKeyPrefix+userSessionId,(error,userID)=>{
            if(error){
                throw error;
            }
            redis.quit();
            console.log(userID);
            return userID;
        });
    }
    //更新
    async resetUserSessionId(userSessionId){
        const redis=this.getRedisConnection();
        redis.expire(redisKeyPrefix+userSessionId,1800,(error,result)=>{
            redis.quit();
        });
    }
    //移除
    async removeUserSessionId(userSessionId){
        const redis=this.getRedisConnection();
        redis.del(redisKeyPrefix+userSessionId,(error,result)=>{
            redis.quit();
        });
    }
}

module.exports=new UserRedisDao();