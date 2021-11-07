const fs=require('fs');

fs.mkdir('mydir',(err)=>{
    if(err){
        throw err;
    }
    console.log("success");
});