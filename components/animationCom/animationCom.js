// components/animationCom/animationCom.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   * 私有属性
   */
  data: {
    isShow: true,
    isAni: false,
    animationData: ''
  },
  

  /**
   * 组件的方法列表
   */
  methods: {
    show() {
      this.roateA();
      this.roateB();
      this.setData({
        isShow: !this.data.isShow,
      })
      console.log(this.data.isShow);
      // this.triggerEvent('showEvent', this.data.isShow);
    },
    hiden(){
      this.setData({
        isShow: !this.data.isShow,
      })
      console.log(this.data.isShow);
    },
    roateA: function () {
      setTimeout(function () {
        this.animation.rotate(150).step();
        this.setData({
          animationData: this.animation.export(), //输出动画
        })
      }.bind(this), 100);
    },
    roateB: function () {
      setTimeout(function () {
        this.animation.rotate(0).step();
        this.setData({
          animationData: this.animation.export(), //输出动画
        })
      }.bind(this), 2000)
    },
  },
    // openAni() {
    //   let that = this;
    //   let isAims = true;
    //   that.animation = wx.createAnimation({
    //     duration: 2000,                 //动画持续时间
    //     timingFunction: 'linear',       //动画动作（匀速、缓慢、缓慢到匀速）
    //     transformOrigin: '50% 50% 0'    //以什么基准点开始动画
    //   })
    //   if (isAims) {
    //     //顺时针旋转150度
    //     that.animation.rotate(150).step();
    //     isAims = false;
    //     setTimeout(function () {
    //       that.setData({
    //         animationData: that.animation.export(), //输出动画
    //         isAni: isAims,
    //       })
    //     }, 1000)
    //   };
    //   if (!isAims) {
    //     that.animation.rotate(0).step();
    //     isAims = true;
    //     setTimeout(function () {
    //       that.setData({
    //         animationData: that.animation.export(),
    //         isAni: isAims,
    //       })
    //     }, 1000)
    //   }
    // }
    
  ready: function() {
    this.animation = wx.createAnimation({
      duration: 1000, //动画时间
      timingFunction: 'linear',       //动画动作（匀速、缓慢、缓慢到匀速）
      transformOrigin: '50% 50% 0',    //以什么基准点开始动画
      delay: 0 //动画延迟时间
    })
  }

})
