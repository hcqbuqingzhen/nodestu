const util=require('util');

const obj={
    name:'zhangsan',
    addr:'beijing'
};

//组合前后关系
const str=util.inspect(obj);

console.log(str);