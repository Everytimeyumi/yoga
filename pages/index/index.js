//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    motto: 'Hello',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onShareAppMessage: function () {

    return {
      title: '瑜伽',
      path: '/page/user?id=123'
    }
  },
  //获取用户ID
  login: function () {
    wx.login({
      success: function(res) {
        console.log(res.code);
        wx.request({
          url: 'https://www.mqvt1.cn/public/index.php/home/Article/user',
          data: { code:res.code},
          header: { 'Content-Type': 'application/json' },
          success: function (res){
            console.log(res.data)
            getApp().globalData.id=res.data.openid
            wx.navigateTo({
              url: '/pages/test/test'
            })
          }
        })
        
      }
    })
  },
  //事件处理函数

 
  getUserInfo:function(e){
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    getApp().globalData.name = e.detail.userInfo.nickName
    getApp().globalData.pic = e.detail.userInfo.avatarUrl
    console.log(getApp().globalData.name)
    console.log(getApp().globalData.pic)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
