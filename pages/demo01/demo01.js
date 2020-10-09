Page({

  /**
   * 页面的初始数据
   */
  data: {
    isRender: true,
    height: 188,
    isChecked: true,
    arr: ['tom', 'mary', 'pat'],
    obj1: {
      name: 'jack',
      age: '22',
      gender: 'male'
    },
    counter: 0
  },
  // 定义事件 handleInput
  handleInput (e) {
    // console.log(e.detail.value)
    this.setData({
      counter: e.detail.value
    })
  },
  // 定义事件 handleCal
  handleCal(e) {
    let value = e.currentTarget.dataset.operation
    this.setData({
      counter: this.data.counter + value
    })
  },
  // add() {
  //   this.setData({
  //     counter: this.data.counter++
  //   })
  // },
  // delete() {
  //   this.setData({
  //     counter: this.data.counter--
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})