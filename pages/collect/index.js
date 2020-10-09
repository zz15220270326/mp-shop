// pages/collect/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: '01',
        name: '商品收藏',
        isActive: true,
      },
      {
        id: '02',
        name: '品牌收藏',
        isActive: false,
      },
      {
        id: '03',
        name: '店铺收藏',
        isActive: false,
      },
      {
        id: '04',
        name: '浏览足迹',
        isActive: false,
      },
    ],
    selectItem: [
      {
        id: '01',
        name: '全部',
        isActive: true,
      },
      {
        id: '02',
        name: '正在热卖',
        isActive: false,
      },
      {
        id: '03',
        name: '店铺收藏',
        isActive: false,
      },
    ],
    collect: []
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

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let collect = wx.getStorageSync('collect');
    this.setData({
      collect
    })
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

  },
  activeTap (e) {
    const currentIndex = e.detail
    let {tabs} = this.data
    tabs.forEach((item, index) => index === currentIndex ? item.isActive = true : item.isActive = false)
    this.setData({
      tabs
    })
  },
  selectItem (e) {
    const currentIndex = e.detail
    let {selectItem} = this.data
    selectItem.forEach((item, index) => index === currentIndex ? item.isActive = true : item.isActive = false)
    this.setData({
      selectItem
    })
  }
})