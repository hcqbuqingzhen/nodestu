const fs=require('fs');

fs.appendFile('info.txt','myinfo','utf-8',(error)=>{
    if(error){
        throw  error;
    }
    console.log("info write")
});