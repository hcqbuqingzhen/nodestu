const fs=require('fs');
//检测文件是否存在
fs.access("info.txt",(error)=>{
    if(error){
        throw  error;
    }
    console.log("success");
})