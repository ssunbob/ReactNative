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
  addMessage:function (req,res) {
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
    
  },
};

module.exports = Message;
