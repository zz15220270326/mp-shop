// request
import {request} from '../../request/index.js'
import {showToast} from '../../utils/asyncWX'
import regeneratorRuntime from '../../lib/runtime/runtime'
// pages/goods_detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailData: {},
    goodsId: 0,
    swiperList: [],
    // detail-info
    goodsPrice: 0,
    goodsName: '',
    goodsIntroduce: '',
    isCollect: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow () {
    let pages =  getCurrentPages();
    let currentPage = pages[pages.length - 1]
    let {options} = currentPage
    this.setData({
      goodsId: options.goods_id
    })
    this.getDetailObj(this.data.goodsId)
  },
  // function
  collectTap () {
    let isCollect = false
    let collect = wx.getStorageSync('collect') || []
    let {detailData} = this.data
    let index = collect.findIndex(item => item.goods_id === detailData.goods_id)
    if (index !== -1) {
      collect.splice(index, 1)
      isCollect = false
      wx.setStorageSync('collect', collect)
      showToast('取消收藏')
    } else {
      collect.push(detailData)
      isCollect = true
      wx.setStorageSync('collect', collect)
      showToast('收藏成功', 'success')
    }
    this.setData({
      isCollect
    })
  },
  // useage fuc
  async getDetailObj (goods_id) {
    const detailData = await request({
      url: '/goods/detail',
      data: {goods_id}
    })
    // 从缓存中获取收藏数据并判断
    let collect = wx.getStorageSync('collect') || []
    let isCollect = collect.some(item => item.goods_id === detailData.goods_id)
    this.setData({
      detailData,
      swiperList: detailData.pics,
      goodsPrice: detailData.goods_price,
      goodsName: detailData.goods_name,
      // 适配某些不支持webp格式的iphone手机
      goodsIntroduce: detailData.goods_introduce.replace(/\.webp/g, '.jpg'),
      isCollect
    })
  },
})