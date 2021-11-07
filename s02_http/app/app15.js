const path=require('path');

//--dirname =nodejs内置 表示本js文件所在路径
const outpath=path.join(__dirname,'app','app13.js');

const extstr=path.extname(outpath);

//转换为对象形式
const objpath=path.parse(outpath);
console.log(objpath);