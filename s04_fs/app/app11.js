const fs=require('fs');
//删除目录 递归删除 recursive:true
fs.rmdir('mydir',{recursive:true},(error)=>{
    if(error){
        throw error;
    }
    console.log("success");
})