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
    controls: false,
    questionnaireList: [
      {
        src: "https://h5.znion.com/pages/questionnaire/1/html/index.html",
        txt: "tDCS问卷"
      }
    ]
  },

  toVideo: function(event) {
    var videoSrc = event.currentTarget.dataset.src;
    var videoTxt = event.currentTarget.dataset.txt;
    wx.navigateTo({
      url: "../../pages/video/video?src=" + videoSrc + "&txt=" + videoTxt
    })
  },

  toQuestionnaire: function(event) {
    var questionnaireSrc = event.currentTarget.dataset.src;
    var questionnaireTxt = event.currentTarget.dataset.txt;
    wx.navigateTo({
      url: "../../pages/webview/webview?link=" + questionnaireSrc + "&txt=" + questionnaireTxt
    })
  },

  list: function(event) {
    var type = event.currentTarget.dataset.type;
    wx.navigateTo({
      url: "list/list?type=" + type
    })
  }
})