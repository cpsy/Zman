// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productList: [
      {
        tag: "BrainScope",
        detail: [
          {
            text: "图片1",
            src: "res/img/BrainScope/1.jpg",
            link: "https://h5.znion.com/index.html"
          },
          {
            text: "图片2",
            src: "res/img/BrainScope/2.jpg",
            link: "https://h5.znion.com/index.html"
          },
          {
            text: "图片3",
            src: "res/img/BrainScope/3.jpg",
            link: "https://h5.znion.com/index.html"
          }
        ]
      },
      {
        tag: "tDCS",
        detail: [
          {
            text: "图片1",
            src: "res/img/tDcs/1.jpg",
            link: "https://h5.znion.com/index.html"
          },
          {
            text: "图片2",
            src: "res/img/tDcs/2.jpg",
            link: "https://h5.znion.com/index.html"
          },
          {
            text: "图片3",
            src: "res/img/tDcs/3.jpg",
            link: "https://h5.znion.com/index.html"
          }
        ]
      },
      {
        tag: "PsyCT",
        detail: [
          {
            text: "图片1",
            src: "res/img/PsyCT/1.jpg",
            link: "https://h5.znion.com/index.html"
          },
          {
            text: "图片2",
            src: "res/img/PsyCT/2.jpg",
            link: "https://h5.znion.com/index.html"
          },
          {
            text: "图片3",
            src: "res/img/PsyCT/3.jpg",
            link: "https://h5.znion.com/index.html"
          }
        ]
      },
      {
        tag: "Aim.robot",
        detail: [
          {
            text: "图片1",
            src: "res/img/Aim.robot/1.jpg",
            link: "https://h5.znion.com/index.html"
          },
          {
            text: "图片2",
            src: "res/img/Aim.robot/1.jpg",
            link: "https://h5.znion.com/index.html"
          },
          {
            text: "图片3",
            src: "res/img/Aim.robot/1.jpg",
            link: "https://h5.znion.com/index.html"
          }
        ]
      }
    ],
    circular: true,
    nextMargin: "40rpx"
  },

  // 点击图片
  toLink: function(event) {
    var link = event.currentTarget.dataset.link;
    wx.navigateTo({
      url: "../../pages/webview/webview?link=" + link
    })
  }
})