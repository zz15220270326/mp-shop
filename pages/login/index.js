// pages/login/index.js
Page({
  data: {},
  loginUserInfo (event) {
    let {userInfo} = event.detail
    wx.setStorageSync('userInfo', userInfo);
    wx.navigateBack({
      delta: 1
    });
  }
})