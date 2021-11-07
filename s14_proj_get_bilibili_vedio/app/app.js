const fs=require('fs');
const urlResolv=require('./bilibiliUrlResolve02');
const {exec}=require('child_process');
const request=require('request');
const http=require('http');
const axios=require('axios');

//const referer="--referer=\"https://www.bilibili.com/video/"
const referer="https://www.bilibili.com/video/"
//写个输入bv的方法
console.log("请输入bv号");
//const bv="BV1Ri4y1G7jN";
const bv="BV1QZ4y1p7Z3";
/*process.stdin.on("data",function (data) {
let bvin=Buffer.from(data).toString();
let bv=bvin.substring(0,bvin.length-1);
console.log(bv);
downloadVideo(bv);
});*/
downloadVideo(bv);
//根据bv号发送视频到aria2下载
function downloadVideo(bv) {
const p=urlResolv(bv);
p.then((data)=>{
        urlTOLocal(data);

        console.log('then');
        data.forEach((key)=>{
            console.log(key.name);
            console.log(key.url);

            //let  command="aria2c \""+key.url+"\" --out=\""+key.name+".flv\" "+referer+bv+"\""+"--dir=\"E:/\"";
            //exexAria2(command);
            rpcAria2_2(key,bv);

        });
    })
}


//rpc 方式调用aria2 axios模块
function rpcAria2(key,bv) {
    let json_rpc = {
        id:'',
        jsonrpc:'2.0',
        method:'aria2.addUri',
        //"method":'system.listMethods',
        params:[
            [key.url],
            {
                out:key.name+".flv",
                referer:referer+bv,
            }
        ]
    };
    console.log(JSON.stringify(json_rpc));
    //"http://localhost:6800/jsonrpc",
    axios.post("http://localhost:6800/jsonrpc",JSON.stringify(json_rpc));
}

//rpc 方式调用aria2 request模块
function rpcAria2_1(key,bv) {
    let json_rpc = {
        id:'',
        jsonrpc:'2.0',
        method:'aria2.addUri',
        //"method":'system.listMethods',
        params:[
            [key.url],
            {
                out:key.name+".flv",
                referer:referer+bv,

            }

        ]

    };
    console.log(JSON.stringify(json_rpc));
    //"http://localhost:6800/jsonrpc",
    let option={
        url:"http://localhost:6800/jsonrpc",
        method:'POST',
        json:true,
        body:JSON.stringify(json_rpc)
    }
   request(option,(error, response, body)=>{
       console.log(body);
   })
}

//rpc 方式调用aria2 http模块 。tm一样的json 为啥失败？？？？？？？
//原因 调用write会分块传输导致请求体中有块长度的行，使得数据出现不一致。
function rpcAria2_2(key,bv) {

    let json_rpc = {
        id:'',
        jsonrpc:'2.0',
        method:'aria2.addUri',
        //"method":'system.listMethods',
        params:[
            [key.url],
            {
                out:key.name+".flv",
                referer:referer+bv,

            }
        ]
    }
    let data=JSON.stringify(json_rpc)
    console.log(JSON.stringify(json_rpc));
    //"http://localhost:6800/jsonrpc",
    let req=http.request({host:"localhost",port:6800,path:"/jsonrpc",method:'POST'},(response)=>{
        console.log("http response")
        response.on("data",function (chunk) {
            console.log(Buffer.from(chunk).toString());
        })
    })
    //req.write(data);
    req.end(data);
}

//方法 开启进程调用本机aria2c
function exexAria2(command) {
    let subprocess=exec.exec(command,{windowsHide:false},(error,stdout,stderr)=>{
        if(error){
            console.log("aria2 error");
            return;
        }else {
            console.log(stdout)
        }
    });
    subprocess.stdout.on('data', (data) => {
        console.log(`接收到数据块 ${data}`);
    });
}

//得到的url以键值对写入磁盘
function urlTOLocal(data){
    let string=JSON.stringify(data);
    //处理data,data为数组 将data转为字符串。
    fs.writeFile('nodejs.txt',string,{flag:'a'},(error)=>{
        if(error){
            console.log("保存失败")
        }
    })
}