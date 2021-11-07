const fs=require('fs');

fs.open("test.txt",'r+',function (error,fd) {
    if(error){
        return console.log("error");
    }
        console.log(fd);

    fs.close(fd,function (error) {
        if(error) {
            console.log("error");
        }
        console.log("file is close");
    })

})