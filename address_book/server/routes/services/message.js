var fs = require('fs');
var util = require('./routes/util');//dangqianwenjian de shangyijimulu ./../
var USER_PATH = './database/user.json';//database.user
var MESSAGE_PATH = './database/message.json';//database.message

var Message = {
  init:function (app) {
    app.post('/message/get',this.getMessage);
    app.post('/message/add',this.addMessage);
  },
// get message
  getMessage:function (req,res) {
    var key = req.param('key');
    if(key != util.getKey()){
      return res.send({
        status:0,
        data;'using no quanxian key'
      });
    }
    fs.readFile(MESSAGE_PATH,function (err,data) {
      if (!err) {
        try {
          var obj = JSON.parse(data);
          return res.send({
            status:1,
            data;obj
          });
        } catch (e) {
          return res.send({
            status:0,
            err:e
          });
        }
      }
      return res.send({
        status:0,
        err:err
      });
    });
  },
// add message
  addMessage:function (req,res) {
    var token = req.param('token');
    var message = req.param('message');
    if(!token || !message){
      return res.send({
        status:0,
        err:'token or message cant be null'
      });
    }
    fs.readFile(USER_PATH,function (err,data) {
      if (err) {
        return res.send({
          status:0,
          err:err
        });
      }
      try {
        var obj = JSON.parse(data);
        for (var i in obj) {
          if (obj[i].token === token) {
          var msgObj = JSON.parse(fs.readFileSync(MESSAGE_PATH));
          msgObj.push({
            messageid:util.guid(),
            userId:obj[i].userId,
            username:obj[i].username,
            time:new Date().getFullYear() + '-' + (parseInt(new Date().getMonth()) + 1) + '-' + new Date().getDate(),
            message:message
          });
          fs.writeFileSync(MESSAGE_PATH,jSON.stringify(msgObj));
          return res.send({
            status:1
          });
        }
      }
        return res.send({
          status:0,
          err:'token yanzheng error'
        });
      } catch (e) {

      }
    });
  },
};

module.exports = Message;
