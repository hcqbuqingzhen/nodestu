//child_process（子进程） execFile
const { execFile } = require('child_process');
const app5 = execFile('node' ,['process08'],(error,stdout,stderr)=>{
    if(error){
        console.log(error);
        throw error;
    }else {
        console.log(stdout.toString());
    }
});

