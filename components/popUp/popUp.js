// components/popUp/popUp.js
// js中使用component来注册组件
/**
 * json 解读
 * component:   自定义组件声明
 * usingComponent: {} 可选项用于应用别的组件
 * */ 
Component({
  /**
   * 在组件定义中启用多个slot支持
   */
  options: {
    multipleSlots: true
  },

  /**
   * 组件的属性列表,组件的对外属性，是属性名到属性设置的映射表，
   * type： 表示属性类型
   * value: 表示属性初始值
   * observe： 表示属性值被更改时的响应函数
   */
  properties: {
    title: {
      type: String ,
      value: '标题'
    },
    cancelText: {
      type: String,
      value: '清除'
    },
    confirmText: {
      type: String,
      value: '确认'
    }
  },

  /**
   * 私有属性，组件的初始数据，和 properties 一同用于组件的的模板渲染
   */
  data: {
    isShow: true
  },

  /**
   * 组件的方法列表
   * 组件的方法，包括事件响应函数和任意的自定义方法
   */
  methods: {
    /**
     * 公有方法：
     * 隐藏： hidenPop
     * 显示： showPop
     */
    hidenPop() {
      this.setData({
        isShow: !this.data.isShow
      })
      console.log(this.data.isShow)
    },
    showPop() {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    /**
     * 私有方法
     * 自定义组件触发时 需要使用triggerEvent方法，指定事件名、detail对象和事件选项
     */
    _cancelEvent() {
      this.triggerEvent("cancelEvent",this.data.isShow)
    },
    _confirmEvent() {
      this.triggerEvent("confirmEvent")
    }
  }
  
})
