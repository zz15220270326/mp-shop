// request
import {request} from '../../request/index.js'
import regeneratorRuntime from '../../lib/runtime/runtime';
// pages/goods_list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: '00',
        name: '综合',
        isActive: true,
      }, 
      {
        id: '01',
        name: '销量',
        isActive: false,
      }, 
      {
        id: '02',
        name: '价格',
        isActive: false,
      },
    ],
    dataInfoList: [],
    total: 0,
  },
  // 1. set an object to sava api-data
  QueryParams: {
    query: '',
    cid: '',
    pagenum: 1,
    pagesize: 10,
  },
  // useage-fuc
  activeTap (e) {
    let index = e.detail;
    let {tabs} = this.data
    tabs.forEach((v, i) => {i === index ? v.isActive = true : v.isActive = false})
    this.setData({
      tabs
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.QueryParams.cid = options.cid || ''
    this.QueryParams.query = options.query || ''
    this.getGoodsList()
  },
  // usage fuc
  async getGoodsList () {
    const result = await request({
      url: '/goods/search',
      data: this.QueryParams
    })
    let total = result.total
    this.setData({
      dataInfoList: [...this.data.dataInfoList, ...result.goods],
      total
    })
  },
  // 1. onReachBottom: 页面触底时出发该事件
  onReachBottom () {
    // 2. 判断是否还有下一页
    let pagenum = this.QueryParams.pagenum
    let num = Math.ceil(this.data.total/this.QueryParams.pagesize)
    if (pagenum < num) {
      // 还有下一页数据，让页码数加一  重新发送请求
      this.QueryParams.pagenum++
      this.getGoodsList()
    } else {
      // 没有下一页数据  发送提示给用户
      wx.showToast({
        title: '已经到底辣！',
        duration: 600,
        mask: false,
        success: (result)=>{
          console.log(result);      
        },
      })
    }
  },
  onPullDownRefresh () {
    this.setData({
      dataInfoList: []
    })
    this.QueryParams.pagenum = 1
    this.getGoodsList()
    wx.stopPullDownRefresh()
  },
})

/**
 * 1. 上拉加载界面
 *   (1). onReachBottom
 *   (2). 判断是否还有下一页数据
 *      math.ceil(num / pagesize) (3)
 *   (3). 有: 
 *           页面数量加一 重新加载数据
 *           this.setData({ dataInfoList: [...dataInfoList, ...result.goods] })
 *           this.QueryParams.pagenum++ this.getGoodsList() 
 *        没有
 * 2. 下拉刷新界面
 *   1. 找到下拉刷新事件; 并在.json文件中添加两个配置项(是否允许;是否显示) 
 *   2. 重置数组dataInfoList
 *   3. 将pagenum设置为 1
 *   4. request
 *   5. 请求回来数据后-关闭下拉窗口
*/