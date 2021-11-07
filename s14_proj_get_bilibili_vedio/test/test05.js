//使用request模块 获取真实下载地址
const request=require('request');
const url="https://api.bilibili.com/x/player/pagelist?bvid=BV12V411k7KE";
request(url,{},(error, response, body)=>{
    console.log(body);
})

