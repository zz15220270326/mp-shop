// request
import {request} from '../../request/index.js'
import regeneratorRuntime from '../../lib/runtime/runtime';
// pages/search/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchItems: [],
    debounce: -1,
    isShow: false,
    inputValue: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  // 获取输入值发送请求
  getSearchInput (e) {
    let inputValue = e.detail
    if (!inputValue.trim()) {
      this.setData({
        searchItems: [],
        isShow: false,
      })
      return
    }
    clearTimeout(this.data.debounce)
    this.setData({
      debounce: setTimeout(() => {
        this.qsearch(inputValue)
      }, 800),
      isShow: true,
      inputValue
    })
  },
  // 发送请求函数
  async qsearch (query) {
    const searchItems = await request({url: '/goods/qsearch', data: {query}})
    this.setData({
      searchItems
    })
  },
  // 清空所有的内容
  clearInput () {
    this.setData({
      searchItems: [],
      debounce: -1,
      isShow: false,
      inputValue: '',
    })
  }
})