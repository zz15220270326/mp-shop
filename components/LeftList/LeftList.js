// components/LeftList/LeftList.js
Component({
  properties: {
    leftList: {
      type: Array,
      default: []
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  data: {
  },
  methods: {
    getTitleIndex (e) {
      let {index} = e.target.dataset
      this.triggerEvent('getTitleIndex', {index})
    },
    pageRefresh (e) {
      let {index} = e.target.dataset
      this.triggerEvent('getTitleIndex', {index})
    },
  }
})
