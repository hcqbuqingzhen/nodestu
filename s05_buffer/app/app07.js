const buffer=Buffer.from('hello');
const myObj={};
const str='a';
const flag=true;

console.log(typeof buffer);
console.log(typeof myObj);
console.log(typeof str);
console.log(typeof flag);

console.log(Buffer.isBuffer(buffer));