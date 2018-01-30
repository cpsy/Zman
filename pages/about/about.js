// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  tel: function(event) {
    var telNum = event.currentTarget.dataset.tel;
    wx.makePhoneCall({
      phoneNumber: telNum
    });
  },

  navigation: function(event) {
    var latitude = 30.4862000000;
    var longitude = 114.5286400000;
    var name = "武汉资联虹康科技股份有限公司";
    wx.openLocation({
      latitude: latitude,
      longitude: longitude,
      name: name
    })
  }
})