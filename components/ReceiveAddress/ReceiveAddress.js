import {getSetting, openSetting, chooseAddress} from '../../utils/asyncWX'
import regeneratorRuntime from '../../lib/runtime/runtime';
Component({
  behaviors: [],
  properties: {
    address: {
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
    async addAddressClick () {
      try {
        const setting = await getSetting()
        const scopeAddress = setting.authSetting['scope.address']
        if (scopeAddress === false) {
          await openSetting()
        }
        let address = await chooseAddress()
        address.detailAddress = address.provinceName+address.cityName+address.countyName+address.detailInfo
        wx.setStorageSync('address', address);
      } catch (error) {
        console.log(error)
      }
    }
  },
});