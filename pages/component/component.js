// pages/component/component.js
// 获取APP实例
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: false
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '组件',
    })
    this.popUp = this.selectComponent("#popUp");
    this.animation = this.selectComponent("#animation");
  },

  /**
   * 打开弹窗组件
   */
  showPopUp(e) {
    this.popUp.hidenPop();
  },
  // cancel和confirm方法监听组件定义的方法
  // 注：（组件中triggerEvent指定了外界使用的事件名、datail和事件选项）
  cancel(e) {
    console.log(e.detail)
    this.popUp.hidenPop()
  },
  confirm(e) {
    console.log(e.detail)
    this.popUp.hidenPop()
  },

  /**
   * 打开封装的动画
   */
  openAnimation(e) {
    this.animation.show();
    console.log(e.detail);
  },

  /**
   * 监听下拉刷新
   * onPullDownRedresh
   */
  onPullDownRefresh: function () {
    console.log('2');
    // wx.showNavigationBarLoading();
    // 下拉再次发起请求
    // wx.request({
    //   url: 'http://119.147.218.67:8302/api/tracklog/gettracklog',
    //   method: 'POST',
    //   // header: {},
    //   data: {},
    //   success: (res) => {   //接口调用成功
    //     console.log(res);
    //   },
    //   fail: (err) => {      //接口调用失败

    //   },
    //   complete: () => {    //接口调用结束的回调

    //   }
    // });
    // 结束下拉刷新
   wx.stopPullDownRefresh();
  },
  
  /**
   * 监听上拉加载
   */
  onReachBottom: function() {
    // console.log('上拉加载');
    wx.showLoading({
      title: '加载中',
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
  onShareAppMessage: function () {
  
  }
})