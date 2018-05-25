// pages/home/home.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    screenW: '',
    screenH: '',
    longitude: 114.23668,       //经度
    latitude: 22.70881,          //纬度
    scale: 13,               //地图缩放级别
    hasDevice: false,
    // markers 标记点用于在地图上显示标记的位置
    markers: [{
      id: 0,               //标记点ID
      longitude: '',       //经度
      latitude: '',          //纬度
      title: '标注',
      iconPath: "/assets/images/定位.png",  //显示的图标
      width: 50,              //标注图标的宽度
      height: 50,              //标注图标的高度
      callout:[{
        content:'111111111111',
        color: '#333333',
        fontSize: 20,
      }],
      label: [{
        content: '222222222222',
        color: '#333333',
        fontSize: 30,
        borderWidth: 1,
        borderColor: '#333333'
      }]
    }],
    // polyline 指定一系列坐标点，从数组第一项连线至最后一项
     //points 经纬数组
    polyline: [{
      points: [{
        longitude: 0,
        latitude: 0,
      },{
        longitude: 0,
        latitude: 0
      }],
      color: "#fff",         //线的颜色
      width: 2,              //线的宽度
      dottedLine: true      //是否为虚线
    }],
    // controls 在地图上显示控件，控件不能随着地图移动
    // controls: [{
    //   id: 1,            
    //   iconPath: '/assets/images/定位.png',
    //   position: {
    //     left: 30,
    //     right: 30,
    //     width: 50,
    //     height: 50
    //   },
    //   clickable: true
    // }]
  },
  
  /**
   * 生命周期函数--监听页面加载
   * 一个页面只会调用一次
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   * 一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
   */
  onReady: function () {
    // 获取设备宽高
    let that = this
    wx.getSystemInfo({
      success: function (res) {
        console.log("获取设备信息=" + JSON.stringify(res))
        that.setData({
          screenW: res.windowWidth,
          screenH: res.windowHeight,
        })
      }
    });

    //设置标题
    wx.setNavigationBarTitle({
      title: '云图小程序',
    });

    // 获取 map 上下文
    this.mapCtx = wx.createMapContext('myMap');
    this.getCenterLocation();
    this.getScale();
    this.moveToLocation();
    this.translateMarker();
  },

  /**
   * 生命周期函数--监听页面显示
   * 每次打开页面都会调用一次。
   */
  onShow: function () {
    // 调用下方定义的方法
    this.getLocations();
  },

  /**
   * 获取用户当前位置
   */
  getLocations() {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        console.log("获取当前的地理位置、速度=" + JSON.stringify(res));
        this.setData({
          longitude: res.longitude,       //经度
          latitude: res.latitude,          //纬度
          makers:[{
            longitude: res.longitude,       //经度
            latitude: res.latitude,          //纬度
          }]
        });
        // this.getOpenLocation();
      }
    })
  },

  /**
   * 查看位置
   */
  getOpenLocation: function() {
    wx.openLocation({
      latitude: this.data.latitude,
      longitude: this.data.longitude,
      scale: 13,
    });
  },

  /**
   * 获取当前地图中心的经纬度
   * getCenterLocation
   */
  getCenterLocation: function() {
    this.mapCtx.getCenterLocation({
      success: function(res) {
        console.log('获取当前地图中心的经纬度='+ JSON.stringify(res));
      }
    })
  },

  /**
   * 将地图中心移动到当前定位点
   * moveToLocation
   */
  moveToLocation: function() {
    this.mapCtx.moveToLocation()
  },

  /**
   * 平移marker 带动画；
   * translateMarker
   */
  translateMarker: function() {
    this.mapCtx.translateMarker({
      markerId: 0,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 22.71991,
        longitude: 114.24779,
      }
    })
  },

  /**
   * 获取当前地图的缩放级别
   */
  getScale: function() {
    this.mapCtx.getScale({
      success: function(res) {
        console.log("获取当前地图的缩放级别=" + JSON.stringify(res));
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   * 当navigateTo或底部tab切换时调用。
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   * 当redirectTo或navigateBack的时候调用
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