Component({
  behaviors: [],
  properties: {
    allChecked: {
      type: Boolean,
      value: false
    },
    totalNum: {
      type: Number,
      value: 0
    },
    totalPrice: {
      type: Number,
      value: 0
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
    allCheckedChange () {
      this.triggerEvent('allCheckedChange')
    },
    toPay () {
      this.triggerEvent('toPay')
    },
  },
});