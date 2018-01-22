// pages/shequ/shequ.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: true,
    selected1: false,
    selected2: false,
    tishi: true,
    tishi1: false,
    jiaoshi: true,
    jiaoshi1: false,
    jiaoshi2: false,
    jiaoshi3: false,
    pictop: "",
    list:[],
    ele:{}
  },
  selected: function (e) {
    this.setData({
      selected1: false,
      selected2: false,
      selected: true
    })
  },
  selected1: function (e) {
    this.setData({
      selected: false,
      selected2: false,
      selected1: true
    })
  },
  selected2: function (e) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: true
    })
  },

  tishi: function (e) {
    this.setData({
      tishi1: false,
      tishi: true
    })
  },
  tishi1: function (e) {
    this.setData({
      tishi: false,
      tishi1: true
    })
  },



  jiaoshi: function (e) {
    this.setData({
      jiaoshi1: false,
      jiaoshi2: false,
      jiaoshi3: false,
      jiaoshi: true,
      jiaoshi4: false
    })
  },
  jiaoshi1: function (e) {
    this.setData({
      jiaoshi: false,
      jiaoshi2: false,
      jiaoshi3: false,
      jiaoshi1: true,
      jiaoshi4: false
    })
  },
  jiaoshi2: function (e) {
    this.setData({
      jiaoshi1: false,
      jiaoshi2: true,
      jiaoshi3: false,
      jiaoshi: false,
      jiaoshi4: false
    })
  },
  jiaoshi3: function (e) {
    this.setData({
      jiaoshi: false,
      jiaoshi2: false,
      jiaoshi3: true,
      jiaoshi1: false,
      jiaoshi4: false
    })
  },
  jiaoshi4: function (e) {
    this.setData({
      jiaoshi: false,
      jiaoshi2: false,
      jiaoshi3: false,
      jiaoshi1: false,
      jiaoshi4: true
    })
  },

  

  toast: function () {
    wx.navigateTo({
      url: '../shequzhongxin/shequzhongxin'
    })
  },
  toast1: function () {
    wx.navigateTo({
      url: '../person/person'
    })
  },
  toast2: function () {
    wx.navigateTo({
      url: '../tishi/tishi'
    })
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
  onLoad: function () {
    var that=this;

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
    wx.request({
      url: 'https://www.mqvt1.cn/public/index.php/home/Yzx/article2',
      headers: { 'Content-Type': 'application/json' },
      success: function (res) {
        that.setData({
          Words1: res.data,
          pictop: getApp().globalData.pic,
        })
      }
    })
    //老师头像
    wx.request({
      url: 'https://www.mqvt1.cn/public/index.php/home/Yzx/teacher1',
      headers: { 'Content-Type': 'application/json' },
      success: function (res) {

        that.setData({
          teacher1: res.data
        })
      }
    })
    wx.request({
      url: 'https://www.mqvt1.cn/public/index.php/home/Yzx/teacher2',
      headers: { 'Content-Type': 'application/json' },
      success: function (res) {

        that.setData({
          teacher2: res.data
        })
      }
    })
    wx.request({
      url: 'https://www.mqvt1.cn/public/index.php/home/Yzx/teacher3',
      headers: { 'Content-Type': 'application/json' },
      success: function (res) {

        that.setData({
          teacher3: res.data
        })
      }
    })
    wx.request({
      url: 'https://www.mqvt1.cn/public/index.php/home/Yzx/teacher4',
      headers: { 'Content-Type': 'application/json' },
      success: function (res) {

        that.setData({
          teacher4: res.data
        })
      }
    })
    wx.request({
      url: 'https://www.mqvt1.cn/public/index.php/home/Yzx/teacher5',
      headers: { 'Content-Type': 'application/json' },
      success: function (res) {

        that.setData({
          teacher5: res.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this
    wx.request({
      url: 'https://www.mqvt1.cn/public/index.php/home/Article/types',
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' //
      },
      success: function (res) {
        console.log(res.data.data)
        that.setData({
          list: res.data.data
        })
      }
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
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '灵性瑜伽锻炼教学',
      path: '/pages/index/index',
       desc: '快来参加免费教学哦！',
      success: function (res) {
        // 转发成功
        
      },
      fail: function (res) {
        // 转发失败
      }
    }
  
  },
  
})
