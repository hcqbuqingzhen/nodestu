const path=require('path');
const json=require('jsonfile');

module.exports=json.readFileSync(path.join(__dirname,'../projectConfig.json'))