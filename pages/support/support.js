// pages/support/support.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoList: [
      {
        src: "https://h5.znion.com/1.mp4",
        txt: "tDCS装机教程"
      },
      {
        src: "https://h5.znion.com/3.mp4",
        txt: "tDCS装机教程"
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
  }
})