const  json=require('jsonfile');
const path=require('path');

module.exports=json.readFileSync(path.join(__dirname,'userServerUrlMapping.json'))