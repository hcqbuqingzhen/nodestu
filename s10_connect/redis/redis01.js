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
}
//测试插入和存数据
/*const dao=new UserRedisDao();
const datastring=Date.now().toString();
console.log(datastring);
dao.storeUserId(datastring,'778899');
const out=dao.getUserId(datastring);
console.log(out);*/
