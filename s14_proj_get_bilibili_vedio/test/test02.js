//测试自带https模块
const https=require('https');
const opt={
    hostname: 'baidu.com',
    port: 443,
    path: '/',
    method: 'GET',
}
const url='https://www.baidu.com/';
const req=https.request(url,(response)=>{
    console.log(response);
});

req.on('connect',(response)=>{
    console.log('connect');
});