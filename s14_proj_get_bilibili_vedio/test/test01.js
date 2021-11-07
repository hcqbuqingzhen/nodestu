const https=require('https');
const opt={
    hostname: 'api.bilibili.com',
    port: 443,
    path: '/x/player/pagelist?bvid=BV12V411k7KE&jsonp=jsonp',
    method: 'GET',
}
const url='https://api.bilibili.com/x/player/pagelist?bvid=BV12V411k7KE&jsonp=jsonp';
const req=https.request(opt,(response)=>{

});

req.end();