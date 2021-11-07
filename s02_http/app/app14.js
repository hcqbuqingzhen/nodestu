const path=require('path');

//--dirname =nodejs内置 表示本js文件所在路径
const outpath=path.join(__dirname,'app','app13.js');

const extstr=path.extname(outpath);

console.log(extstr);