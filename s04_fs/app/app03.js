const fs=require('fs');
//删除
fs.unlink("mytest1.txt",(error)=>{
    if(error){
        throw  error;
    }
    console.log("success");
});