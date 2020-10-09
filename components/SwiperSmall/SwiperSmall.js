Component({
  behaviors: [],
  properties: {
    swiperList: {
      type: Array,
      value: []
    }
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
    handlePreviewImage (e) {
      let {index} = e.currentTarget.dataset
      let urls = this.data.swiperList.map(item => item.pics_mid)
      let current = urls[index]
      wx.previewImage({
        current,
        urls,
      })
    }
  },
});