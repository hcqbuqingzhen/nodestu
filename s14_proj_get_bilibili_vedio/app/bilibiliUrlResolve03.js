const request=require('request');
const cheerio=require('cheerio');

async function bvResolve(bv) {
    //查询有几p
    const data=await getPnum(bv);
    //查询每p的下载地址
    const allUrl=await getAllDownUrl(data,bv);
    console.log("allUrl")
    return allUrl;
}
//查询有几p
function getPnum(bv) {
    let url="https://api.bilibili.com/x/player/pagelist?bvid="+bv+"&jsonp=jsonp";
    return new Promise((resolve,reject)=>{
   //const url="https://api.bilibili.com/x/player/pagelist?bvid=BV12V411k7KE&jsonp=jsonp";
       request(url,{timeout:2000000},(error, response, body)=>{
           let mybody=JSON.parse(body);
           console.log(mybody.data.length);
           resolve(mybody.data);
       })
   })
}
//获取每p的下载地址
function getAllDownUrl(data,bv) {
    return new Promise((resolve,reject)=>{
        let promiseArray=[];
        for (let i=1;i<=data.length;i++){
            let requestData={
                bilibiliurl2:bv+"?p="+i,
                zengqiang: true
            }
            promiseArray[i-1]=getDownUrl(data[i-1].part,requestData);
        }
        resolve (Promise.all(promiseArray));
    })
}
//获取每分p的下载地址
function getDownUrl(name,requestData){
    const myurl="https://xbeibeix.com/api/bilibili/";
    return new Promise((resolve,reject)=>{
        request.post(myurl,{form:requestData,timeout:20000},(error, response, body)=>{
            //console.log(body);
            let $=cheerio.load(body);
            let myaddress=$("a[href*=\"upgcxcode\"]");
            let url=myaddress.attr('href');
            //console.log(url);
            let port={};
            port.name=name;
            port.url=url;
            resolve(port);
        })
    })
}

bvResolve("BV12V411k7KE").then((data)=>{
    console.log('then');
    data.forEach((key)=>{
        console.log(key.name);
        console.log(key.url);
    });
});

//module.exports=bvResolve;