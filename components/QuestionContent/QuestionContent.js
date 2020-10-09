Component({
  behaviors: [],
  properties: {
    imagePathList: {
      type: Array,
      value: []
    }
  },
  data: {
    inputValue: ''
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
    addImage () {
      this.triggerEvent('addImage')
    },
    removeImage (e) {
      let index = e.detail
      this.triggerEvent('removeImage', index)
    },
    changeInput (e) {
      let {value} = e.detail
      this.triggerEvent('changeInput', value)
    },
    feedbackSubmit () {
      this.triggerEvent('feedbackSubmit')
    }
  },
});

// getImage () {
//   let imagePathList = wx.getStorageSync('imagePathList') || []
//   this.setData({
//     imagePathList
//   })
// }