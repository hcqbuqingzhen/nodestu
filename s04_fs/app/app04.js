const fs=require('fs');
//异步可能会出错
//删除
fs.rename("mytest1.txt","mytest-1.txt",function (error) {
if(error){
    throw  error;
}
    fs.stat("mytest-1.txt",(error,stats)=>{
    if(error){
        throw error;
    }
    console.log(JSON.stringify(stats));
     })
})
//读取信息
// fs.stat("mytest-1.txt",(error,stats)=>{
//     if(error){
//         throw error;
//     }
//     console.log(JSON.stringify(stats));
// });