// pages/category/index.js
import {
  request
} from "../../request/index.js"
// request-es7 (async await)
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // totalData
    totalData: [],
    // left-list-data
    leftList: [],
    // right-title & right-content
    rightList: [],
    currentIndex: 0,
    scrollTop: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    // --- 优化操作 - 设置本地存储数据 --1
    const totalData = wx.getStorageSync('totalData')
    // --- 判断本地存储数据是否存在以及本地存储是否到期 --2
    if (!totalData) {
      this.getCategoryPageData()
      console.log('request');
      // 判断存储时间是否查过time：
      // 1. 超过时间就重新发送请求
      // 2. 没有超过时间就可以使用本地存储数据
    } else {
      // 1 请求超时，重新发送请求
      if (Date.now() - totalData.time > 1000 * 60 * 10) {
        console.log('timeout & request');
        this.getCategoryPageData()
      } else {
        // 2 在请求时间内，使用本地存储数据
        console.log('use old data');
        let storageData = totalData.data;
        let leftList = storageData.map(item => item.cat_name)
        let rightList = storageData[0].children
        this.setData({
          totalData: storageData,
          leftList,
          rightList
        })
      }
    }
  },
  async getCategoryPageData() {
    // request('/categories')
    //   .then((result) => {
    //     // total-data
    //     let totalData = result.data.message
    //     // left & right 
    //     let leftList = totalData.map(item => item.cat_name)
    //     let rightList = totalData[0].children    
    //     this.setData({
    //       // totalData
    //       totalData,
    //       // left-list-data
    //       leftList,
    //       // right-list-data
    //       rightList
    //     }),
    //     // 数据已经得到, 设置本地存储 --3
    //     wx.setStorageSync('totalData', {
    //       time: Date.now(),
    //       data: this.data.totalData
    //     })
    //   })
    // es7-request
    /**
     * step-1: async function
     * step-2: awiat result
     * get & set: data 
     */
    const result = await request({url: '/categories'})
    // total-data
    let totalData = result
    // left & right 
    let leftList = totalData.map(item => item.cat_name)
    let rightList = totalData[0].children
    this.setData({
        // totalData
        totalData,
        // left-list-data
        leftList,
        // right-list-data
        rightList
      }),
      // 数据已经得到, 设置本地存储 --3
      wx.setStorageSync('totalData', {
        time: Date.now(),
        data: this.data.totalData
      })
  },
  getTitleIndex(e) {
    let {index} = e.detail
    // 获取当前下标数字
    this.setData({
      currentIndex: index
    })
    let rightList = this.data.totalData[index].children
    this.setData({
      rightList,
      scrollTop: 0
    })
  }
})