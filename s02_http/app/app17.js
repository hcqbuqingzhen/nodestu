const dns=require('dns');

//--dirname =nodejs内置 表示本js文件所在路径
const domain='34.96.190.24';

dns.reverse(domain,function (error,address) {
    if(error){
        console.log(error);
        return;
    }

    console.log(address);
})