// pages/my/my.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    screenHeight: '',
    contents: [
      { id: 1, text: "我的资料", url: "", icon: "11" },
      { id: 2, text: "我的卡卷", url: "", icon: "22" },
      { id: 3, text: "我的收藏", url: "", icon: "33" },
      { id: 4, text: "历史记录", url: "", icon: "44" },
      { id: 5, text: "我的发布", url: "", icon: "55" },
      { id: 6, text: "关于合作", url: "", icon: "66" },
      { id: 7, text: "联系我们", url: "", icon: "77" },
    ],
    abouts: [
      { id: 8, text: "问题反馈", url: "", icon: "88" },
      { id: 9, text: "关于小程序", url: "", icon: "99" },
    ],
    hasUserInfo: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          screenHeight: res.windowHeight,
        })
      },
    })
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.setNavigationBarTitle({
      title: '用户中心',
    });
    this.getUser();
  },
  getUser: function() {
    console.log('2');
  },
  onGetUserInfo: function(e){
    console.log('1');
    var that = this;
    var hasUser  = true;
    if (!e.detail.userInfo) {
      hasUser = false;
      console.log(hasUser)
    }else {
      hasUser = true;
      console.log(hasUser)
    }
    console.log(hasUser);
    that.setData({
      hasUserInfo: hasUser
    });
    console.log(that.setData.hasUserInfo);
    
   
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