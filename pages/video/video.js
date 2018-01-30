// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    autoplay: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var src = options.src;
    var txt = options.txt;
    this.setData({
      src: src,
      txt: txt
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})