// pages/demo05/demo05.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  /**
   * 生命周期函数onload-监听页面加载
   * 发送异步网络请求数据
   * */ 
  onLoad () {
    console.log('onLoad')
  },
  /**
   * 生命周期函数onShow-监听页面显示
   * */ 
  onShow () {
    console.log('onShow')
  },
  /**
   * 生命周期函数onReady-监听页面渲染完成
   * */ 
  onReady () {
    console.log('onReady');
  },
  /**
   * 生命周期函数onHide-监听页面隐藏
   * */ 
  onHide () {
    console.log('onHide');
  },
  /**
   * 生命周期函数onUnload-监听页面卸载
   * */ 
  onUnload () {
    console.log('onUnload');
  },
  /**
   * 生命周期函数onPullDownRefresh-监听页面下拉更新
   * */ 
  onPullDownRefresh () {
    console.log('onPullDownRefresh')
  },
  /**
   * 生命周期函数onReachBottom-监听页面是否到达底部
   * */
  onReachBottom () {
    console.log('触底!下拉加载更多')
  },
  /**
   * 生命周期函数-监听页面滚动
   */
  onPageScroll(){
    // console.log("onPageScroll");
  },
  /**
   * 生命周期函数onResize-监听是否发生页面大小变化(如横屏和竖屏之间切换)
   * */ 
  onResize () {
    
    console.log('onResize');
  },
  /**
   * 1 必须要求当前页面 也是tabbar页面
   * 2 点击的自己的tab item的时候才触发
   */
  onTabItemTap(){
    console.log("onTabItemTap");
  }
})