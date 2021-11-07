class UserService{
    login(username,password){
        console.log("用户登录"+username+","+password)

        return true;
    }
}

module.exports=new UserService();