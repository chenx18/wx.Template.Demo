//app.js
var util = require('utils/util.js');
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        // 
        console.log(res.code);
        if(res.code) {
          wx.request({
            url: 'https://test.com/onLogin',
            data: {
              code: res.code
            }
          })
        }else {
          console.log('登入失败');
        }
        
        
      }
    })

    // 授权信息
    wx.getSetting({
      success: (res) => {
        console.log(res);
        if (!res.authSetting['scope.userInfo']) {
          this.globalData.hasUser = false;
          console.log(this.globalData.hasUser);
        }
      }
    })


    
  },
  globalData: {
    userInfo: null,
    flag: false,
    hasUser: ''
  }
})