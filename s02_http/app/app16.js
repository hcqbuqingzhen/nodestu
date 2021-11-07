const dns=require('dns');

//--dirname =nodejs内置 表示本js文件所在路径
//const domain='www.pickcy.top';
const domain='www.baidu.com';

dns.resolve(domain,function (error,address) {
    if(error){
        console.log(error);
        return;
    }

    console.log(address);
})