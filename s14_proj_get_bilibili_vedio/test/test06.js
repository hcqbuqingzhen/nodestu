//使用request模块 获取真实下载地址
// 直接调取第三方网站解析dom获得地址 较慢
const request=require('request');
const cheerio=require('cheerio');
const myurl="https://xbeibeix.com/api/bilibili/";
const requestData={
    bilibiliurl2:"BV12V411k7KE?p=8",
    zengqiang: true
}
/*for (let i = 0; i < 37; i++) {

}*/
request.post(myurl,{form:requestData},(error, response, body)=>{
    //console.log(body);
    let $=cheerio.load(body);
    let myaddress=$("a[href*=\"upgcxcode\"]");
    for (let i = 0; i < myaddress.length; i++) {
        console.log(myaddress.attr('href'));
    }
})




