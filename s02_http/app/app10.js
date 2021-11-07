const querystring=require('querystring');

const urlString='http://www.test.com?name=zhangsan&&address=beijing';

//组合前后关系
const obj=querystring.parse(urlString);

console.log(obj);