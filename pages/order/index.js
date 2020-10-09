import {request} from '../../request/index'
import regeneratorRuntime from '../../lib/runtime/runtime'
// pages/order/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: '00',
        name: '全部',
        isActive: false,
      }, 
      {
        id: '01',
        name: '待付款',
        isActive: false,
      }, 
      {
        id: '02',
        name: '待发货',
        isActive: false,
      },
      {
        id: '03',
        name: '退款/发货',
        isActive: false,
      },
    ],
    orders: [],
  },
  onLoad (options) {
    // let intoIndex = options.type - 1
    // let {tabs} = this.data
    // tabs.forEach((item, index) => index === intoIndex ? item.isActive = true : item.isActive = false)
    // this.setData({
    //   tabs
    // })
  },
  onShow () {
    let pages = getCurrentPages();
    let currentPage = pages[pages.length - 1]
    const {type} = currentPage.options
    const token = wx.getStorageSync('token')
    if (!token) {
      wx.navigateTo({
        url: '/pages/auth/index',
        fail: (error)=>{
          console.log(error)
          return
        }
      });
    } else {
      this.getOrder(type)
    }
  },
  activeTap (e) {
    let currentIndex = e.detail
    let {tabs} = this.data
    tabs.forEach((item, index) => index === currentIndex ? item.isActive = true : item.isActive = false)
    this.setData({
      tabs
    })
  },
  // 封装的方法
  async getOrder (type) {
    const result = await request({url: '/my/orders/all', data: {type}})
    this.setData({
      orders: result.orders
    })
  },
})