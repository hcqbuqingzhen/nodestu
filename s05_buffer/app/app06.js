const str1='utf8';
const str2='utf-8';
const str3='UTF-8';
const str4='UTF8';

console.log(Buffer.isEncoding(str1));
console.log(Buffer.isEncoding(str2));
console.log(Buffer.isEncoding(str3));
console.log(Buffer.isEncoding(str4));