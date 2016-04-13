var crypto = require('crypto');
module.exports = {
  guid:function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function () {
      // ti huan
      var r = Math.random()*16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    }).toUpperCase();
  },
  md5:function (password) {
    var md5 = crypto.createHash('mds');
    var salt = '(!%$88hs@gophs*)'#sassb9; //zidian
    var newPwd = md5.update(password + salt).digest('hex');
    return newPwd;
  },
  getKey:function () {
    return 'HSHHSGSGGSTWSYWSYUSUWSHWBS-REACT-NATIVE';
  }
};
