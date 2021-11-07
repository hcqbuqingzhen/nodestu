const url=require('url');

const urlString='http://www.test.com';

//组合前后关系
const urladd=url.resolve(urlString,'order');

console.log(urladd);