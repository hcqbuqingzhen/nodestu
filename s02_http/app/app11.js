const querystring=require('querystring');

const obj={
    name:'zhangsan',
    addr:'beijing'
};

//组合前后关系
const str=querystring.stringify(obj);

console.log(str);