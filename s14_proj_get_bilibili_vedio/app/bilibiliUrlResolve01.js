//使用request模块 获取真实下载地址
// 直接调取第三方网站解析，根据aid,cid 获得真实地址
const request=require('request');

//根据bv号获取所有的cid. aid
//https://api.bilibili.com/x/web-interface/view?bvid=BV1hT4y177sv
    function getAidAndCid(url) {
        return new Promise((resolve,reject)=>{
            request(url,{},(error, response, body)=>{
                const mybody=JSON.parse(body);
                const data={};
                //console.log(mybody);
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
        })
    }
    //获取下载url
    function getDownUrl(data) {
        return new Promise((resolve,reject)=>{
            console.log(data);
            let myurl="https://www.xbeibeix.com/api/bilibiliapi.php?"
            //根据获取的 aidcid 获得真实的下载地址。
            const promiseArray=[];
            let i=0;
            data.cids.forEach((key)=>{
                let url=myurl+"aid="+data.aid+"&cid="+key.cid;
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
        return new Promise((resolve,reject)=>{
            request(url,{timeout:20000},(error, response, body)=>{
                //console.log(JSON.parse(body));
                let myport={};
                let mybody=JSON.parse(body)
                myport.name=name;
                myport.url=mybody.url;
                console.log(myport.name);
                resolve(myport);
            })
        });
    }

async function urlResolve(bv) {
    const getAllaidcidUrl="https://api.bilibili.com/x/web-interface/view?bvid="+bv;
    const aidAndCid=await getAidAndCid(getAllaidcidUrl);
    const data=await getDownUrl(aidAndCid);
    console.log(data);
    //data 即为获取到的结果
    return  data;
}
//urlResolve("BV1Ga4y1a74B");
module.exports=urlResolve;
