// pages/home/home.js

import HttpService from '../../es6/es6-class.js';
import { n1, n2, n3, n4, getClassName } from '../../es6/es6-module.js';
import fn from '../../es6/es6-module.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播
    imgUrl: [
      {
        url: "../../assets/images/banner/banner_01.png",
        title: "520珍惜你爱的人",
        id: "b01"
      },
      {
        url: "../../assets/images/banner/banner_02.png",
        title: "一城一故事",
        id: "b02"
      },
      {
        url: "../../assets/images/banner/banner_03.png",
        title: "选择远航，将回不了故乡",
        id: "b03"
      },
      {
        url: "../../assets/images/banner/banner_04.png",
        title: "猫咪也忧虑",
        id: "b04"
      }
    ],   //轮播图路径
    indicatorDots: true,  //是否显示面板指示点
    autoPlay: true,  // 是否自动切换
    interval: 5000,  //  自动切换时间间隔
    duration: 800,  // 滑动动画时长
    //格子导航
    grids: [
      { icon: "", title: "首页", url: "" },
      { icon: "", title: "新闻头条", url: "" },
      { icon: "", title: "音乐", url: "" },
      { icon: "", title: "组件", url: "" },
      { icon: "", title: "授权", url: "" },
      { icon: "", title: "地图", url: "" },
      { icon: "", title: "位置", url: "" },
      { icon: "", title: "扫描", url: "" },
    ],
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let aa = HttpService.getBanner();
    console.log(aa);

    // console.log --> module
    console.log(n1);
    console.log(n2);
    console.log(n3);
    console.log(n4);

    // 使用 as 关键字；
    let className = getClassName.className();
    console.log(className);

    // 使用export default 
    let pluss = fn.plus(3,5);
    console.log(pluss);
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '首页',
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