import {request} from '../../request/index'
import regeneratorRuntime from '../../lib/runtime/runtime'
import {login} from '../../utils/asyncWX'
// pages/auth/index.js
Page({
  async getUserInfo (e) {
    try {
      // real-handle
      // const {rawData, signature, encryptedData, iv} = e.detail
      // const {code} = await login()
      // const loginParams = {encryptedData, rawData, iv, signature, code}
      // const {token} = await request({
      //   url: '/users/wxlogin', 
      //   data: loginParams, 
      //   method: 'post'
      // })

      // mock-handle: mock token
      const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIzLCJpYXQiOjE1NjQ3MzAwNzksImV4cCI6MTAwMTU2NDczMDA3OH0.YPt-XeLnjV-_1ITaXGY2FhxmCe4NvXuRnRB8OMCfnPo'
      wx.setStorageSync('token', token)
      wx.navigateBack({
        delta: 1
      })
    } catch (error) {
      console.log(error);
    }
  },
})