Component({
  behaviors: [],
  properties: {
    imagePathList: {
      type: Array,
      value: [],
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
    removeImage (e) {
      let {index} = e.currentTarget.dataset
      this.triggerEvent('removeImage', index)
    },
  },
});