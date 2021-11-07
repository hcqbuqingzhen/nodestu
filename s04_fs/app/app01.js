const fs=require('fs');
//文件写
fs.writeFile('mytest.txt','mytest,nodejs',{flag:'a'},function (error) {
    if(error){
        console.log("error white");
    }else {
        console.log("write success");
    }
});