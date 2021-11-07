const fs=require('fs');

//文件读
fs.readFile("test.txt",'utf-8',function (error,data) {

    if(error){
        console.log("error ");
    }else {
        console.log(data);
    }

});

//文件写
fs.writeFile('mytest.txt','mytest,nodejs',{flag:'a'},function (error) {
    if(error){
        console.log("error white");
    }else {
        console.log("write success");
    }
});