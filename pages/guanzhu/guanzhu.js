// pages/shequ/shequ.js
Page({

  /**
  * 页面的初始数据
  */
  data: {
    char_lt: ">",
    list: [],
    pictop:"",
  },

  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    var that = this
    console.log(getApp().globalData.id)
    wx.request({
      url: 'https://www.mqvt1.cn/public/index.php/home/User/userz',
      data: { openid: getApp().globalData.id },

      header: { 'Content-Type': 'application/json' },
      success: function (res) {
        console.log(res.data.data)
        that.setData({
          list: res.data.data,
          pictop: getApp().globalData.pic
        })



      }
    })

  },

  /**
  * 生命周期函数--监听页面初次渲染完成
  */
  onReady: function () {

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