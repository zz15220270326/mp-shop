Component({
  behaviors: [],
  properties: {
    detailData: {
      type: Object,
      value: {}
    },
  },
  data: {

  },
  lifetimes: {
    created() {

    },
    attached() {

    },
    moved() {

    },
    detached() {

    },
  },
  methods: {
    addToCart () {
      // 设置并获取缓存的购物车数据
      let cart = wx.getStorageSync('cart') || [];
      let detailData = this.properties.detailData
      let goods_id = detailData.goods_id
      // 判断添加的物品是否已经存在缓存中
      let index = cart.findIndex(item => item.goods_id === goods_id)
      // new-item
      if (index === -1) {
        // detailData.num = 1
        // cart.push(detailData)
        const good = {
          ...detailData, 
          num: 1,
          checked: true,
        }
        cart.push(good) 
      } else {
        cart[index].num++
      }
      wx.setStorageSync('cart', cart);
      wx.showToast({
        title: '添加成功',
        icon: 'success',
        mask: true,
      })
    },
  },
});