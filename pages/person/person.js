// pages/shequ/shequ.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    char_lt: ">",
    pictop: "",
    name:"",
    fans:[],
    guanzhu:[],
    naber:[],
  },


  toast: function () {
    wx.navigateTo({
      url: '../guanzhu/guanzhu'
    })
  },


  toast1: function () {
    wx.navigateTo({
      url: '../dongtai/dongtai'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this
  wx.request({
    url: "https://www.mqvt1.cn/public/index.php/home/User/fans",
    data: { openid: getApp().globalData.id},
    headers: { 'Content-Type': 'application/json' },
    success: function (res) {
      console.log(res.data.data)
      that.setData({
        fans: res.data.data
      })
    }
  })
  wx.request({
    url: "https://www.mqvt1.cn/public/index.php/home/User/useratten",
    data: { openid: getApp().globalData.id},
    headers: { 'Content-Type': 'application/json' },
    success: function (res) {
      console.log(res.data.data)
      that.setData({
        guanzhu: res.data.data
      })
    }
  })
  
  wx.request({
    url: "https://www.mqvt1.cn/public/index.php/home/User/userz",
    data: { openid: getApp().globalData.id },
    headers: { 'Content-Type': 'application/json' },
    success: function (res) {
      console.log(res.data.data)
      that.setData({
        naber: res.data.data
      })
    }
  })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(getApp().globalData.id)
    var that = this
    that.setData({
      pictop: getApp().globalData.pic,
      name: getApp().globalData.name
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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