Component({
  behaviors: [],
  properties: {
    cartList: {
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
    cartItemChange (event) {
      let {id} = event.currentTarget.dataset
      this.triggerEvent('cartItemChange', id)
    },
    handleSub (event) {
      let {id} = event.currentTarget.dataset
      this.triggerEvent('handleSub', id)
    },
    handleAdd (event) {
      let {id} = event.currentTarget.dataset
      this.triggerEvent('handleAdd', id)
    }
  },
});