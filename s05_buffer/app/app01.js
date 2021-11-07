const buffer1=Buffer.from('hello');
const buffer2=Buffer.from('world');

const result=buffer1.compare(buffer2)

console.log(result);