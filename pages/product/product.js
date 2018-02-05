// pages/product/product.js
var Model = require("../../utils/model.js");
Page({
  data: {
    imgBaseUrl: "https://h5.znion.com/images/",
    circular: true,
    nextMargin: "40rpx"
  },

  onLoad: function(options) {
    var self = this;
    Model.request("getAllProduct",{},function(success,data,message) {
      if(success) {
        self.setData({
          productList: data
        });
      }else {
        wx.showToast({
          title: message
        })
      }
    });
  },

  toLink: function(event) {
    var link = event.currentTarget.dataset.link;
    wx.navigateTo({
      url: "../../pages/webview/webview?link=" + link
    })
  }
})