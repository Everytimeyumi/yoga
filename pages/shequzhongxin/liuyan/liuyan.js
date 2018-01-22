// pages/shequzhongxin/shequzhongxin.js
Page({
  data: {
  liuyan:"",
  },
  //获取用户输入的用户名
  liuyanInput: function (e) {
    this.setData({
      liuyan: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log(getApp().globalData.id)
  },
  //获取留言
  loginBtnClick: function (e) {
    wx.request({
      url: 'https://www.mqvt1.cn/public/index.php/home/User/adddiscu',
      data: { openid: getApp().globalData.id, content: this.data.liuyan },
      header: { 'Content-Type': 'application/json' },
      success: function (res) {
        wx.redirectTo({
          url: '../shequzhongxin',
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