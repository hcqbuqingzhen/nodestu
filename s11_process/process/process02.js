//child_process（子进程）
const { exec } = require('child_process');
const dir = exec('ls');

dir.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
    console.log('process02:::::'+dir.pid);
});

dir.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

dir.on('close', (code) => {
    console.log(`子进程退出，退出码 ${code}`);
});