Component({
  behaviors: [],
  properties: {
    selectItem: {
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
    selectItem (e) {
      let {index} = e.currentTarget.dataset
      this.triggerEvent('selectItem', index)
    }
  },
});