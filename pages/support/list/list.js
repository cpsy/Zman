// pages/support/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var type = options.type;
    var title = "";
    if(type == "video") {
      title = "视频教程";
    }else if(type == "questionnaire") {
      title = "问卷回访";
    }
    this.setData({
      title: title
    })
  }

})