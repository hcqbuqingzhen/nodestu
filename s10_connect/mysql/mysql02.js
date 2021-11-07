//引入mysql
const mysql=require('mysql');
const uuid=require('uuid');
//连接数据库
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'test1'
});

//查询
connection.connect((error)=>{
    if(error){
        console.log('error');
    }else {
        console.log('nice');

        connection.query('select * from users',(error,result)=>{
            if(error){
                console.log('select error');
                throw  error;
            }else {
                console.log(result);
            }
        });
        connection.end();
    }
});
