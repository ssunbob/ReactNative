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
        });
      }
      return res.send({
        status:0,
        err:err
      });
    });
  },

// add user
addUser : function (req,res) {
  var username = res.param('username');
  var password = util.md5(req.param('password'));
  var tel = req.param('tel');
  var email = req.param('email');
  var partment = req.param('partment');
  var tag = req.param('tag');
  var creater = req.param('creater') || '';//creater accept null

  if (!username || !password || !tel || !email || !partment || !tag || !creater) {
    return res.send({
      status:0,
      data:'queshao biyao canshu'
    });
  }

  try {
    var content = JSON.parse(fs.readFileSync(USER_PATH));
    var obj = {
      "userId":util.guid(),
      "password":password,
      "partment":partment,
      "tel":tel,
      "email":email,
      "tag":tag,
      "creater":creater,
      "time":new Date(),
      "token":''
    };
    content.push(obj);
    //update file
    fs.writeFileSync(USER_PATH,JSON.stringify(content));
    //clear cache
    delete obj.password;
    return res.send({
      status:1,
      data:obj
    });
  } catch (e) {
    return res.send({
      status:0,
      err:e
    });
  }
},
// user login
login : function (req,res) {
  //EMAIL CONFIRM USER UNIQUE
  var email = req.param('email');
  var password = util.md5(req.param('password'));
  var deviceId = req.param('deviceId');
  var token = util.guid() + deviceId;
  var content = JSON.parse(fs.readFileSync(USER_PATH).toString());
  //loop compare
  for (var i = 0; i < array.length; i++) {
    array[i]
  }
},
// login by token
loginByToken : function (req,res) {

},
// user update password
updatePassword : function (req,res) {

},
// delete user
deleteUser : function (req,res) {

},

};

module.exports = User;
