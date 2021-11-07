const qs=require('qs');
const baseHttpClient=require('../common/baseHttpClient');
const userRequestUrlResolver=require('../config/client/userRequestUrlResolver');

class UserController {
    //接收前端  调用后端
    async login(ctx){
        const requestUrl= userRequestUrlResolver.login;
        console.log(ctx.request.body);
        const response=await baseHttpClient.doHttpPostRequest(ctx,requestUrl,JSON.stringify(ctx.request.body));
        const responseDate=qs.parse(response.data);

        const responseDateCode=responseDate.result.code;

        if(0===responseDateCode){
            ctx.body=responseDate
        }else {
            ctx.body=responseDate;
        }
    }

}

module.exports=new UserController();