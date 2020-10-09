// import request
import {request} from "../../request/index.js"
// index-page
Page({
  data: {
    swiperList: [],
    cateList: [],
    floorList: []
  },
  onLoad() {
    // 添加本地缓存
    const swiper = wx.getStorageSync('swiper')
    const cate = wx.getStorageSync('cate')
    const floor = wx.getStorageSync('floor')
    // 判断是否在本地缓存中获取数据
    // swiper
    if (!swiper) {
      this.getSwiperList()
    } else {
      if (Date.now() - swiper.time > 1000 * 60 * 10) {
        this.getSwiperList()
        // console.log('chong xin qing qiu');
      } else {
        // console.log('ben di huan cun');
        let swiperList = swiper.data
        this.setData({
          swiperList
        })
      }
    }
    // cate
    if (!cate) {
      this.getCateList()
    } else {
      if (Date.now() - cate.time > 1000 * 60 * 10) {
        this.getCateList()
      } else {
        let cateList = cate.data
        this.setData({
          cateList
        })
      }
    }
    // floor
    if (!floor) {
      this.getFloorList()
    } else { 
      if (Date.now() - floor.time > 1000 * 60 *10) {
        this.getFloorList()
      } else {
        let floorList = floor.data
        this.setData({
          floorList
        })
      }
    } 
  },
  // getSwiperList
  getSwiperList () {
    request({url: '/home/swiperData'})
      .then((result) => {
        this.setData({
          swiperList: result
        })
        wx.setStorageSync('swiper', {
          time: Date.now(),
          data: this.data.swiperList
        })
      })
  },
  getCateList () {
    request({url: '/home/catitems'})
      .then((result) => {
        this.setData({
          cateList: result
        })
        wx.setStorageSync('cate', {
          time: Date.now(),
          data: this.data.cateList
        })
      })
  },
  getFloorList () {
    request({url: '/home/floordata'})
      .then((result) => {
        this.setData({
          floorList: result
        })
        wx.setStorageSync('floor', {
          time: Date.now(),
          data: this.data.floorList
        })
      })
  }
})
