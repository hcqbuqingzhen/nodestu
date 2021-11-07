const mongoose=require('mongoose');
const uri='mongodb://192.168.1.111:27017/test-nodejs';

mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true},(error)=>{
    if(error){
        console.log('error');
        throw error;
    }else {
        console.log('nice');

        //定义模式
        const Parent = new mongoose.Schema({
            name:String,
            age:Number,
            address:String
        });
        const Student=new mongoose.Schema({
            name:String,
            age:Number,
            address:String,
            married:Boolean,
            parents:Parent
            }
        );
        mongoose.model('student',Student);
        const myStudent=mongoose.model('student');

        const student=new myStudent({
            name:'zhangsan',
            age:20,
            address:'beijing',
            married:true,
            parents:{
                name:'list',
                age:50,
                address:'beijing'
            }
        });

        //保存并查询
        student.save((error)=>{
            if(error){
                console.log('error');
            }else {
                console.log('ininininin a in le');

                myStudent.find({},(error,data)=>{
                    if(error){
                        console.log('error');
                        throw error;
                    }else {
                        console.log(data);

                        //查询后删除
                        data.forEach((doc)=>{
                            doc.remove();
                        })
                    }
                });
            }
        });

    }
});

