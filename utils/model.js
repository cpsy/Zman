var HOST = "https://api.znion.com/Zman";

/* 产品 */
var getAllProduct = {
  url: HOST + "/product/getAllProduct",
  method: "get"
};

/* 问卷 */
var getAllSurvey = {
  url: HOST + "/surveyInfo/getAllSurvey",
  method: "get"
};


var Model = {
  getAllProduct: getAllProduct,
  getAllSurvey: getAllSurvey
}

var request = function (key,params,success,fail) {
  var item = Model[key];
  if(!item) {
    return wx.showToast({
      title: "接口不存在"
    })
  }
  var itemBak = Object.assign(item,params);
  itemBak.success = function(d) {
    var ret = d.data;
    success(!!ret.success, ret.data, ret.message);
  }
  itemBak.fail = function () {
    if(fail) {
      fail();
    }else {
      wx.showToast({
        title: "请求服务器失败"
      })
    }
  }
  itemBak.complete = function() {
    wx.hideLoading();
  }
  wx.showLoading();
  wx.request(itemBak);
}

module.exports.request = request;