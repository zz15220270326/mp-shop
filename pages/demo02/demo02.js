// pages/demo02/demo02.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gender: '',
    list: [
      {
        number: 0,
        name: '🍎',
        value: 'apple'
      }, 
      {
        number: 1,
        name: '🍌',
        value: 'banana'
      }, 
      {
        number: 2,
        name: '🍊',
        value: 'orange'
      }
    ], 
    showList: []
  },
  getPhoneNumber(e) {
    console.log(e);
  },
  getUserInfo(e) {
    console.log(e);
  },
  handleChange(e) {
    let value = e.detail.value
    if (value === 'male') {
      this.setData({
        gender: '男'
      })
    } else if (value === 'female') {
      this.setData({
        gender: '女'
      })
    }
  },
  checkboxChange(e) {
    let showList = e.detail.value
    this.setData({
      showList
    })
  }
})