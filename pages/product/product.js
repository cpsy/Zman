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
            src: "res/img/BrainScope/1.jpg"
          },
          {
            text: "图片1",
            src: "res/img/BrainScope/1.jpg"
          },
          {
            text: "图片1",
            src: "res/img/BrainScope/1.jpg"
          }
        ]
      },
      {
        tag: "tDcs",
        detail: [
          {
            text: "图片1",
            src: "res/img/tDcs/1.jpg"
          },
          {
            text: "图片1",
            src: "res/img/tDcs/1.jpg"
          },
          {
            text: "图片1",
            src: "res/img/tDcs/1.jpg"
          }
        ]
      },
      {
        tag: "PsyCT",
        detail: [
          {
            text: "图片1",
            src: "res/img/PsyCT/1.jpg"
          },
          {
            text: "图片1",
            src: "res/img/PsyCT/1.jpg"
          },
          {
            text: "图片1",
            src: "res/img/PsyCT/1.jpg"
          }
        ]
      },
      {
        tag: "Aim.robot",
        detail: [
          {
            text: "图片1",
            src: "res/img/Aim.robot/1.jpg"
          },
          {
            text: "图片1",
            src: "res/img/Aim.robot/1.jpg"
          },
          {
            text: "图片1",
            src: "res/img/Aim.robot/1.jpg"
          }
        ]
      }
    ],
    indicatorDots: true,
    autoplay: false,
    indicatorActiveColor: "#006537",
    circular: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onload");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})