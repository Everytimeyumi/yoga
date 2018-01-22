var app = getApp()
Page({
  data: {
    imgUrls: [
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    userInfo: {},
    selected: true,
    selected1: false,
    selected2: false,
    selected3: false,
    selected4: false
  },
  logina: function () {
    wx.request({
      url: 'https://www.mqvt1.cn/public/index.php/home/User/index',
      data: { openid: getApp().globalData.id, name: getApp().globalData.name, picurl: getApp().globalData.pic, },
      header: { 'Content-Type': 'application/json' },
      success: function (res) {
        console.log(res.data);
        wx.navigateTo({
          url: '../shequ/shequ'
        })
      }
    }) 
  },
  selected: function (e) {
    this.setData({
      selected1: false,
      selected2: false,
      selected3: false,
      selected: true,
      selected4: false
    })
  },
  selected1: function (e) {
    this.setData({
      selected: false,
      selected2: false,
      selected3: false,
      selected1: true,
      selected4: false
    })
  },
  selected2: function (e) {
    this.setData({
      selected1: false,
      selected2: true,
      selected3: false,
      selected: false,
      selected4: false
    })
  },
  selected3: function (e) {
    this.setData({
      selected: false,
      selected2: false,
      selected3: true,
      selected1: false,
      selected4: false
    })
  },
  selected4: function (e) {
    this.setData({
      selected: false,
      selected2: false,
      selected4: true,
      selected1: false,
      selected3: false
    })
  },
  onLoad: function () {
    console.log('onLoad test');
    var that = this

    //轮播图
    wx.request({
      url: 'https://www.mqvt1.cn/public/index.php/home/Yzx/img',
      headers: { 'Content-Type': 'application/json' },
      success: function (res) {
        that.setData({
          imgUrls: res.data,
        })  
      }
    })
//文字1
    wx.request({
      url: 'https://www.mqvt1.cn/public/index.php/home/Yzx/article2',
      headers: { 'Content-Type': 'application/json' },
      success: function (res) {

        that.setData({
          Words1: res.data
        })
      }
    })
    //文字2
    wx.request({
      url: 'https://www.mqvt1.cn/public/index.php/home/Yzx/article3',
      headers: { 'Content-Type': 'application/json' },
      success: function (res) {

        that.setData({
          Words2: res.data
        })
      }
    })
    //文字3
    wx.request({
      url: 'https://www.mqvt1.cn/public/index.php/home/Yzx/article7',
      headers: { 'Content-Type': 'application/json' },
      success: function (res) {

        that.setData({
          Words3: res.data
        })
      }
    })
    //老师头像
    wx.request({
      url: 'https://www.mqvt1.cn/public/index.php/home/Yzx/teacher1',
      headers: { 'Content-Type': 'application/json' },
      success: function(res) {
        console.log(res.data);
        that.setData({
          teacher1: res.data
        })
      }
    })
    wx.request({
      url: 'https://www.mqvt1.cn/public/index.php/home/Yzx/teacher2',
      headers: { 'Content-Type': 'application/json' },
      success: function (res) {
        console.log(res.data);
        that.setData({
          teacher2: res.data
        })
      }
    })
    wx.request({
      url: 'https://www.mqvt1.cn/public/index.php/home/Yzx/teacher3',
      headers: { 'Content-Type': 'application/json' },
      success: function (res) {
        console.log(res.data);
        that.setData({
          teacher3: res.data
        })
      } 
    })
    wx.request({
      url: 'https://www.mqvt1.cn/public/index.php/home/Yzx/teacher4',
      headers: { 'Content-Type': 'application/json' },
      success: function (res) {
        console.log(res.data);
        that.setData({
          teacher4: res.data
        })
      }
    })
    wx.request({
      url: 'https://www.mqvt1.cn/public/index.php/home/Yzx/teacher5',
      headers: { 'Content-Type': 'application/json' },
      success: function (res) {
        console.log(res.data);
        that.setData({
          teacher5: res.data
        })
      }
    })
  }
})