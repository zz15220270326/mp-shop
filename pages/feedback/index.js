import {showToast} from '../../utils/asyncWX'
// pages/feedback/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: '01',
        name: '体验问题',
        isActive: true,
      },
      {
        id: '02',
        name: '商品, 店家投诉', 
        isActive: false,
      },
    ],
    imagePathList: [],
    inputValue: '',
    uploadImages: []
  },

  onShow() {
  },

  // activeTap
  activeTap (e) {
    let currentIndex = e.detail
    let {tabs} = this.data
    tabs.forEach((item, index) => index === currentIndex ? item.isActive = true : item.isActive = false)
    this.setData({
      tabs,
    })
  },
  // addImage
  addImage () {
    let {imagePathList} = this.data
    wx.chooseImage({
      count: 9,
      sizeType: ['original','compressed'],
      sourceType: ['album','camera'],
      success: (result)=>{
        let {tempFilePaths} = result
        this.setData({
          imagePathList: [...imagePathList, ...tempFilePaths]
        })
      }
    })
  },
  // removeImage
  removeImage (e) {
    let index = e.detail
    let {imagePathList} = this.data
    imagePathList.splice(index, 1)
    this.setData({
      imagePathList
    })
  },
  // changeInput
  changeInput (e) {
    let inputValue = e.detail
    this.setData({
      inputValue
    })
  },
  // feedbackSubmit
  feedbackSubmit () {
    let {inputValue, imagePathList, uploadImages} = this.data
    if (!inputValue.trim()) {
      showToast('您输入的内容不合法')
      inputValue = ''
      this.setData({
        inputValue
      })
    } else {
      imagePathList.forEach((item, index) => {
        wx.uploadFile({
          // 
          filePath: item,
          // 上传时的文件名称
          name: 'file',
          // 图片上传的位置
          url: 'url',
          // 请求成功后返回的打印函数
          success: (result) => {
            let url = JSON.parse(result.data).url
            uploadImages.push(url)
            // 图片即将上传完成
            if (index === imagePathList.length - 1) {
              // 真实开发中是将这些数据请求到后台的服务器中
              console.log('submit files & images')
              this.setData({
                imagePathList: [],
                inputValue: '',
                uploadImages: []
              })
            }
          }
        })
        showToast('上传成功')
      })
      setTimeout(() => {
        wx.navigateBack({
          delta: 1
        })
      }, 800)
    }
  },
})