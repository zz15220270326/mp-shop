Component({
  behaviors: [],
  properties: {
    goodsPrice: {
      type: Number,
      value: 0
    },
    goodsName: {
      type: String,
      value: ''
    },
    goodsIntroduce: {
      type: String,
      value: ''
    },
    isCollect: {
      type: Boolean,
      value: false
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
    collectTap () {
      this.triggerEvent('collectTap')
    }
  },
});