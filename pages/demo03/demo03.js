// pages/demo03/demo03.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList: [
      {
        id: 0,
        name: "首页",
        isActive: true
      },
      {
        id: 1,
        name: "原创",
        isActive: false
      }
      ,
      {
        id: 2,
        name: "分类",
        isActive: false
      }
      ,
      {
        id: 3,
        name: "关于",
        isActive: false
      }
    ]
  },
  /*
    自定义方法
  */
  tabTap(e) {
    let index = e.detail.index
    let {tabList} = this.data
    tabList.forEach((v, i) => {i === index ? v.isActive = true : v.isActive =false})
    this.setData({
      tabList
    })
  }
})