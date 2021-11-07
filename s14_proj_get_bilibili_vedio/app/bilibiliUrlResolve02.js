//使用request模块 获取真实下载地址
// 直接调取第三方网站解析，根据aid,cid 获得真实地址
const request=require('request');
const fs=require('fs');
const axios=require('axios');


//根据bv号获取所有的cid. aid
//https://api.bilibili.com/x/web-interface/view?bvid=BV1hT4y177sv
//const getAllaidcidUrl='https://api.bilibili.com/x/web-interface/view?bvid=BV12V411k7KE'
function getAidAndCid(url) {
    return new Promise((resolve,reject)=>{
        request(url,{},(error, response, body)=>{
            const mybody=JSON.parse(body);
            const data={};
            data.aid=mybody.data.aid;
            data.cids=new Array();
            for (let i = 0; i < mybody.data.pages.length; i++) {
                let mycid={};
                mycid.cid=mybody.data.pages[i].cid;
                mycid.name=mybody.data.pages[i].part;
                data.cids[i]=mycid;
            }
            resolve(data);
        })
    });
}

//获取下载url
function getDownUrl(data) {
    return new Promise((resolve,reject)=>{
        console.log(data);
        //const myurl="https://www.xbeibeix.com/api/bilibiliapi.php?aid=92759194&cid=158164739";
        //https://api.bilibili.com/x/player/playurl/
        let myurl="http://api.bilibili.com/x/player/playurl?"
        //根据获取道德aidcid 获得真实的下载地址。
        const promiseArray=[];
        let i=0;
        data.cids.forEach((key)=>{
            let url=myurl+"avid="+data.aid+"&cid="+key.cid+"&qn=120";
            let promise=promiseGetUrl(url,key.name);
            promiseArray[i]=promise;
            i++;
        })
        //获取结果数组
        resolve(Promise.all(promiseArray));
    });
}

//promiseGetUrl 创建promise
function promiseGetUrl(url,name) {
    //大于480画质需要验证是否登陆
    //设置cookie
    /*let cookie="LIVE_BUVID=AUTO2415752899276147;"+
    "buvid3=CA3A72D1-8D98-4991-BF2F-1478AF123A39155818infoc;"+
    "_uuid=A63A1CD0-D84E-1CEF-3828-CA9D27BE846B28217infoc;"+
    "CURRENT_FNVAL=16; stardustvideo=1; sid=ajuckapm;"+
    "rpdid=|(km~lmk~l0J'ul~lkm||Y);"+
    "im_notify_type_24945036=0; CURRENT_QUALITY=80;"+
    "DedeUserID=24945036;"+
    "DedeUserID__ckMd5=9b8b4a1bf996cf31;"+
    "SESSDATA=96d7ea2a%2C1600592696%2Cf1ee7*31;"+
    "bili_jct=262c4c742153121b479c8525ce162009;"+
    "bp_video_offset_24945036=408528484519115161;"+
    "bsource=search_baidu;"+
    "PVID=1"*/
    let cookie="SESSDATA=96d7ea2a%2C1600592696%2Cf1ee7*31;"
    return new Promise((resolve,reject)=>{
        request(url,{headers:{Cookie:cookie}},(error, response, body)=>{
            //console.log(JSON.parse(body));
            let myport={};
            let mybody=JSON.parse(body)
            myport.name=name;
            myport.url=mybody.data.durl[0].url;
            //console.log(myport.url);
            resolve(myport);
        })
        /*return axios.get(url,{headers:{
                Cookie:cookie
            }}).then((data)=>{
            let mybody=data.data;
            let myport={};
            console.log(mybody);
            myport.name=name;
            myport.url=mybody.data.durl[0].url;
            //console.log(myport.url);
            resolve(myport);
        })*/
    });
}
//解析获得的
async function urlResolve(bv) {
    const getAllaidcidUrl="https://api.bilibili.com/x/web-interface/view?bvid="+bv;
    const aidAndCid=await getAidAndCid(getAllaidcidUrl);
    const data=await getDownUrl(aidAndCid);
    //console.log(data);
    //data 即为获取到的结果
    return  data;
}

module.exports=urlResolve;
