//child_process（子进程） fork
[1,2,3,4,5,6].forEach(i=>{
    console.log(i);
});

process.on('message',(data)=>{
    console.log(data);
    process.send('ye come');
});

