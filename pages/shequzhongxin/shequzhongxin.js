// pages/shequzhongxin/shequzhongxin.js
Page({
  data: {
    array: [],
    //change:true
    //changeview:true,
    attention: "关注",
    //noattention:"已关注"
  },
  // changeview: function () {
  //   var that = this;
  //   that.setData({
  //     change: (!that.data.change)
  //   })
  // },
  // change: function (e) {
  //   var that=this;
  //   var id=e.currentTarget.dataset.id;
  //   var text=this.data.array[id].attention;
  //   var param={};
  //   var change ="array["+id+"].attention";
  //   param[change]="已关注"; 
  //   if (this.data.array[id].attention =="关注") {
  //     that.setData(param);
  //   }else{
  //     var changeturn = "array[" + id + "].attention";
  //     param[change] = "关注";
  //     that.setData(param);
  //   }
  // },
  change: function (e) {
    console.log(e.currentTarget.dataset.text)
    wx.request({
      url: 'https://www.mqvt1.cn/public/index.php/home/User/attention',
      data: { openid: getApp().globalData.id, userid: e.currentTarget.dataset.text, },
      headers: { 'Content-Type': 'application/json' },
      success: function (res) {
        console.log(res.data.data)
        wx.showModal({
          title: '提示',
          content: res.data.data,
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }
    })
  },
  toast: function () {
    wx.redirectTo({
      url: 'liuyan/liuyan'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this
    wx.request({
      url: 'https://www.mqvt1.cn/public/index.php/home/User/discu',
      headers: { 'Content-Type': 'application/json' },
      success: function (res) {
        console.log(res.data.data)
        that.setData({
          array: res.data.data
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