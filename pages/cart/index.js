import {showModal, showToast} from '../../utils/asyncWX'
import regeneratorRuntime from '../../lib/runtime/runtime'
// pages/cart/index.js
Page({
  data: {
    address: {},
    cartList: [],
    allChecked: false,
    totalNum: 0,
    totalPrice: 0,
  },
  onShow () {
    const address = wx.getStorageSync('address')
    const cartList = wx.getStorageSync('cart') || []
    // let allChecked = cartList.length?cartList.every(item => item.checked):false
    this.countNumAndPrice(cartList)
    this.setData({
      address
    })
  },
  // 购物车中商品的checked绑定event
  cartItemChange (e) {
    const id = e.detail
    // 获取修改的商品购物车对象
    let cartList = wx.getStorageSync('cart')
    // 商品对象的选中状态 -- 取反
    let index = cartList.findIndex(item => item.goods_id === id)
    cartList[index].checked = !cartList[index].checked
    // 重新填充到data和缓存中
    this.setData({
      cartList
    })
    wx.setStorageSync('cart', cartList)
    // 重新计算全选  总价格 和 总数量
    this.countNumAndPrice(cartList)
  },
  // 全选事件
  allCheckedChange () {
    // 获取缓存中的cartList
    let cartList = wx.getStorageSync('cart')
    // 获取 data -> allChecked
    let {allChecked} = this.data
    // 点击后allChecked取反
    allChecked = !allChecked
    // 判断一下checked
    // 变成true - 全选 - 所有对象的checked变成true
    // 变成false - 全不选 - 所有对象的checked变成false
    // if (allChecked === true) {
    //   for (let item of cartList) {
    //     item.checked = true
    //   }
    // } else {
    //   for (let item of cartList) {
    //     item.checked = false
    //   }
    // }
    cartList.forEach(item => item.checked = allChecked)
    // 更新data和缓存
    this.setData({
      allChecked,
      cartList,
    })
    wx.setStorageSync('cart', cartList)
    // 重新计算全选  总价格 和 总数量
    this.countNumAndPrice(cartList)
  },
  // handleSub (e) {
  //   const id = e.detail
  //   // 获取修改的商品购物车对象
  //   let cartList = wx.getStorageSync('cart')
  //   // 找到对应的商品信息 -- 删除
  //   // 判断该商品的数量是否大于1  
  //   //   1. 大于1 直接进行数量减1
  //   //   2. 小于或等于1 删除缓存和data中的购物车数组中的该商品
  //   let index = cartList.findIndex(item => item.goods_id === id)
  //   let itemNum = cartList[index].num
  //   if (itemNum > 1) {
  //     cartList[index].num--
  //   } else {
  //     // cartList.splice(index, 1)
  //     wx.showModal({
  //       title: '客官',
  //       content: '要狠心删除吗😭😭',
  //       success: (result) => {
  //         if(result.confirm){
  //           cartList.splice(index, 1)
  //           // 更新data和缓存
  //           this.setData({
  //             cartList
  //           })
  //           wx.setStorageSync('cart', cartList)
  //           // 重新计算全选  总价格 和 总数量
  //           this.countNumAndPrice(cartList)
  //         } else if (result.cancel) {
  //           console.log('用户取消操作');
  //         }
  //       }
  //     });
  //   }
  // },
  async handleSub (e) {
    const id = e.detail
    let cartList = wx.getStorageSync('cart')
    // 找到对应的商品信息 -- 删除
    let index = cartList.findIndex(item => item.goods_id === id)
    let itemNum = cartList[index].num
    if (itemNum > 1) {
      cartList[index].num--
    } else {
      let result = await showModal({content: '确认删除？'})
      if (result.confirm) {
        cartList.splice(index, 1)
      }
    }
    this.setData({
      cartList
    })
    wx.setStorageSync('cart', cartList)
    this.countNumAndPrice(cartList)
  },
  handleAdd (e) {
    const id = e.detail
    // 获取修改的商品购物车对象
    let cartList = wx.getStorageSync('cart')
    // 找到对应的商品信息 -- 增加
    let index = cartList.findIndex(item => item.goods_id === id)
    cartList[index].num++
    // 更新data和缓存
    this.setData({
      cartList
    })
    wx.setStorageSync('cart', cartList)
    // 重新计算全选  总价格 和 总数量
    this.countNumAndPrice(cartList)
  },
  async toPay () {
    // 获取收货地址和总的商品数量
    let {address, totalNum} = this.data
    if (!address.userName) {
      await showToast('请先添加收货地址', 'none', 1200)
      return
    }
    if (totalNum === 0) {
      await showToast('请先添加商品！')
      return
    }
    // 跳转到结算页面
    wx.navigateTo({
      url: '/pages/pay/index',
      success: (result)=>{
        
      },
    });
  },
  // extract
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
      allChecked,
      totalNum,
      totalPrice
    })
  }
})