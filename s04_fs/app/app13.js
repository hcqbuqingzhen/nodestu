const fs=require('fs');

//创建流
const readStream=fs.createReadStream('app12.js',{encoding:'utf-8'});
//输出流
const writeStream=fs.createWriteStream("copy-app12.txt",{encoding:'utf-8'});

readStream.on('open',(fd)=>{
    console.log(fd);
});

readStream.on('ready',()=>{
    console.log('ready')
});

readStream.on('data',(data)=>{
    writeStream.write(data,()=>{
        console.log(data);
    })
});

readStream.on('end',()=>{
    console.log('end');
});

readStream.on('close',()=>{
    console.log("close");
});

readStream.on('error',(error)=>{
    console.log(error);
});
