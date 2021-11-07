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

//插入数据
connection.connect((error)=>{
    if(error){
        console.log('error');
    }else {
        console.log('nice');
        const userid=uuid.v1();
        const username='south';
        const realname='zhangsan';
        const age=20;
        const address='zhengzhou';

        connection.query('insert into users set ? ',{
            uid:userid,
            username:username,
            realname:realname,
            age:age,
            address:address
        },(error,result)=>{
            if(error){
                console.log('insert error');
                throw  error;
            }else {
                console.log(result);
            }
        });
        connection.end();
    }
});
