// pages/content/content.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listen: [],
    comp: []
  },

  practice: function (event) {
    var that = this

    var id = event.target.id
    console.log(id);

    wx.navigateTo({

      url: '/pages/everyday/everyday?id=' + id

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this
    wx.request({
      url: 'https://www.mqvt1.cn/public/index.php/home/Article/mrts',
      data: {

      },
      header: {
        'content-type': 'application/json' //
      },
      success: function (res) {
        console.log(res.data.data)
        that.setData({
          listen: res.data.data
        })
        // console.log(listen)
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

  },
  globalData: {
    ID: ""
  }
})

