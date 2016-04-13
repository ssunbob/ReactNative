var Test = {
  init:function (app) {
    app.get('/test/test',this.doTest);
    app.get('/test/show',this.doShow);
  },
  doTest:function (req,res) {
    res.send({
      status:1,
      info:'ceshi fuwu doTest'
    });
  },
  doShow:function (req,res) {
    res.json({
      status:1,
      info:'ceshi fuwu doShow'
    });
  }
};

module.exports = Test;
