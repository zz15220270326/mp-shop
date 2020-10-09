Component({
  behaviors: [],
  properties: {
    userInfo: {
      type: Object,
      value: {}
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
    toLoginPage () {
      wx.navigateTo({
        url: '/pages/login/index',
        fail: (error)=>{
          console.log(error)
          return
        },
      });
    }
   },
});