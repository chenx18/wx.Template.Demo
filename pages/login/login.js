// pages/login/login.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:'',
    hasPassword: '',
    cueShow: false,
    cueText: '',
    cueAnimationData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '登入',
    })

    if (app.globalData.flag) {
      wx.navigateBack({
        delta: 1
      })
    } else {
      console.log('这里是login')
    }
    
  
  },
  // 监听用户名输入框失去焦点 

  bindName(e) {
    console.log(e.detail.value);
    let _cueShow = false;
    let _cueText = '';
    if (e.detail.value ==='' ){
      _cueText = '请输入用户名';
      _cueShow = true;
    } 
    this.setData({
      userName: e.detail.value,
      cueShow: _cueShow,
      cueText: _cueText
    })
  },
  // 监听密码输入框失去焦点
  bindPassword(e) {
    let _cueShow = false;
    let _cueText = '';
    console.log(e.detail.value);
    if (this.data.userName === '') {
      console.log('请输入用户名');
      _cueText = '请输入用户名';
      _cueShow = true;
    }
    this.setData({
      userPassword: e.detail.value,
      cueShow: _cueShow,
      cueText: _cueText
    })
    
  },
  // 登入
  formSubmit: function(e) {
    console.log(e.detail.value);
    let userData = e.detail.value;
    let _cueShow = false;
    let _cueText = '';
    if (userData.userName === '' && userData.userPassword === '') {
      console.log('请输入用户名和密码');
      _cueText = '请输入用户名和密码';
      _cueShow = true;
    } else {
      if (userData.userName === '') {
        console.log('请输入用户名');
        _cueText = '请输入用户名';
        _cueShow = true;
      }
      if (userData.userPassword === '') {
        console.log('请输入密码');
        _cueText = '请输入密码';
        _cueShow = true;
      }
    }
    this.setData({
      cueShow: _cueShow,
      cueText: _cueText
    })
    wx.switchTab({
      url: '/pages/home/home',
    })
  },
// 扫描登入
  qrCode() {
    let qrcodeName;
    wx.scanCode({
      success: (res) =>{
        qrcodeName = res.result;
        this.setData({
          userName: qrcodeName
        })
      }
    })
  },
  // 获取用户信息授权
  getUserInfoClick(e) {
    console.log(e);

  },
  /**
   * 页面渲染完成
   */
  onReady: function() {
    
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