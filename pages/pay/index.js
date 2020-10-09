import {request} from '../../request/index'
import {requestPayment, showToast} from '../../utils/asyncWX'
import regeneratorRuntime from '../../lib/runtime/runtime'
// pages/pay/index.js
// 1. 获取缓存中的购物车的数据  只获取被选中的 checked
// 2. 微信支付
Page({
  data: {
    address: {},
    cartList: [],
    totalNum: 0,
    totalPrice: 0,
    order_number: '',
  },

  onShow () {
    const address = wx.getStorageSync('address')
    let cartList = wx.getStorageSync('cart') || []
    cartList = cartList.filter(item => item.checked)
    this.countNumAndPrice(cartList)
    this.setData({
      address
    })
  },
  async handlePay () {
    try {
      const token = wx.getStorageSync('token')
    if (!token) {
      wx.navigateTo({
        url: '/pages/auth/index'
      })
      return
    } else {
      // console.log('获取到token数据')
      // 获取订单token请求头
      // const header = {Authorization: token}
      // 获取订单价格以及收货地址
      const order_price = this.data.totalPrice
      const consignee_addr = this.data.address.detailAddress
      // 将cartList的属性封装到新数组中
      let goods = []
      const {cartList} = this.data
      cartList.forEach(item => goods.push({
        goods_id: item.goods_id,
        goods_number: item.num,
        goods_price: item.goods_price
      }))
      const orderParams = {order_price, consignee_addr, goods}
      // 发起获取订单请求
      const {order_number} = await request({
        url: '/my/orders/create', 
        method: 'post', 
        data: orderParams,
        // header
      })
      // 发起预支付
      const {pay} = await request({
        url: '/my/orders/req_unifiedorder',
        // header,
        data: {order_number},
        method: 'post'
      })
      // 微信支付
      // await requestPayment(pay)
      // 查询后台 订单状态
      // const paymentStatus = request({
      //   url: '/my/orders/chkOrder', 
      //   header,
      //   data: {order_number},
      //   method: 'post',
      // })
      await showToast('支付成功', 'success')
      // 删除已经支付了的数据
      let newCart = wx.getStorageSync('cart')
      newCart = newCart.filter(item => !item.checked)
      wx.setStorageSync('cart', newCart);
      // 支付完成  跳转到订单也看
      setTimeout(() => {
        wx.navigateTo({
          url: '/pages/order/index'
        })
      }, 1000)
    }
    } catch (error) {
      console.log(error);
    }
  },

  // 计算商品被选中的数量以及总价格
  countNumAndPrice (cartList) {
    let allChecked = true
    let totalNum = 0
    let totalPrice = 0
    cartList.forEach(item => {
      if (item.checked) {
        totalNum += item.num
        totalPrice += item.num*item.goods_price
      } else {
        allChecked = false
      }
    })
    allChecked = cartList.length != 0 ? allChecked : false
    this.setData({
      cartList,
      totalNum,
      totalPrice
    })
  }
})
