Component({
  behaviors: [],
  properties: {
    isShow: {
      type: Boolean,
      value: false
    },
    inputValue: {
      type: String,
      value: ''
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
    getSearchInput (e) {
      let {value} = e.detail
      this.triggerEvent('getSearchInput', value)
    },
    clearInput () {
      this.triggerEvent('clearInput')
    }
  },
});