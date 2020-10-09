// pages/user/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    collectLength: 0
  },
  onShow () {
    const userInfo = wx.getStorageSync('userInfo');
    const collect = wx.getStorageSync('collect') || []
    const collectLength = collect.length
    this.setData({
      userInfo,
      collectLength
    })
  },
  toLoginPage () {
    console.log('to login page');
  }
})