// pages/support/support.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoList: [
      {
        src: "https://h5.znion.com/videos/tDCS_pack.mp4",
        txt: "tDCS装机教程"
      },
      {
        src: "https://h5.znion.com/videos/tDCS_open.mp4",
        txt: "tDCS拆机教程"
      }
    ],
    objectFit: "fill",
    autoplay: false,
    controls: false
  },

  toVideo: function(event) {
    var videoSrc = event.currentTarget.dataset.src;
    var videoTxt = event.currentTarget.dataset.txt;
    wx.navigateTo({
      url: "../../pages/video/video?src=" + videoSrc + "&txt=" + videoTxt
    })
  },

  list: function(event) {
    var type = event.currentTarget.dataset.type;
    wx.navigateTo({
      url: "list/list?type=" + type
    })
  }
})