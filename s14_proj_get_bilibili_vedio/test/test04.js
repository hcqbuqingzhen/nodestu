//使用request模块
// 根据bv号获取页面视频分p数据，包分p cid.
const request=require('request');
const url="https://api.bilibili.com/x/player/pagelist?bvid=BV12V411k7KE";
request(url,{},(error, response, body)=>{
    console.log(body);
})

