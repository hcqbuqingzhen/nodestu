const buffer1=Buffer.from('你好世界');
const jsonstring=JSON.stringify(buffer1);

console.log(jsonstring);

const jsonObject=JSON.parse(jsonstring);

console.log(jsonObject);

const buffer2=Buffer.from(jsonObject);

console.log(buffer2.toString());