const request=require('request');

const url="https://www.xbeibeix.com/api/bilibiliapi.php?aid=413142817&cid=191546076"
request(url,{timeout:20000},(error, response, body)=>{
    const mybody=JSON.parse(body);
    console.log(mybody.url);
})
