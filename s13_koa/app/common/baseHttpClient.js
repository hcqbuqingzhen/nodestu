//向后台发送请求的模块
const axios=require('axios');
const projectConfig=require('../util/projectConfigResolver');

const hostBaseUrl=projectConfig.hostBaseUrl;

//发送http请求
exports.doHttpGetRequest=function (ctx,requestUrl,params) {
    return this.doHttpRequest(ctx,requestUrl,params,'GET')
}
//POST
exports.doHttpPostRequest=function (ctx,requestUrl,params) {
    return this.doHttpRequest(ctx,requestUrl,params,'POST')
}
//PUT
exports.doHttpPutRequest=function (ctx,requestUrl,params) {
    this.doHttpRequest(ctx,requestUrl,params,'PUT')
}
//DELETE
exports.doHttpDeleteRequest=function (ctx,requestUrl,params) {
    this.doHttpRequest(ctx,requestUrl,params,'DELETE')
}
//通用的http请求
exports.doHttpRequest=function (ctx,requestUrl,params,method) {
    if("GET"===method){
        return axios({
            baseURI:hostBaseUrl,
            url:requestUrl,
            method:'GET',
            params:params
        });
    }else if("POST"===method||"PUT"===method||"DELETE"===method) {
        return axios({
            baseURI:hostBaseUrl,
            url:requestUrl,
            method:method,
            //data 属性不同是分开的原因
            data:params
        });
    }
}