var fs = require('fs');
var util = require('./routes/util');//dangqianwenjian de shangyijimulu ./../
var USER_PATH = './database/user.json';//database.user

var User = {
  //chu shi hua fangfa
  init : function (app) {
    app.post('/user/get',this.getUser);
    app.post('/user/create',this.addUser);
    app.post('/user/login',this.login);
    app.post('/user/login/token',this.loginByToken);
    app.post('/user/password/update',this.updatePassword);
    app.post('/user/delete',this.deleteUser);
  },
  //huoqu yonghu xinxi
  getUser : function (req,res) {
    var key = req.param('key');
    var partment = req.param('partment');
    if (key !== util.getKey()){
      return res.send({
        status:0,
        data:'using un jianquan key'
      });
    }
    fs.readFile(USER_PATH,function (err,data){
      if (!err) {
        try {
          var obj = JSON.parse(data);
          var newobj = [];
          for (var i in obj) {
            delete obj[i]['password'];
            newobj.push(obj[i]);
          }
        }
        return res.send({
          status:1,
          data:newobj
        });
      }
      catch (e){
        return res.send({
          status:0,
          err:e
        })
      }
    }
      return res.send({
        status:0,
        err:err
      });
    });
  },
};
