const buffer=Buffer.alloc(128);

const length=buffer.write("hhhhhhhnnnnnnnmmmmmmbbbbbbb",'utf-8');

console.log(length);