let requestTime = 0
export const request = (urlInfo) => {
  return new Promise((resolve, reject) => {
    requestTime ++
    let header = {...urlInfo.header}
    if (urlInfo.url.includes('/my/')) {
      header['Authorization'] = wx.getStorageSync('token')
    }
    // loading
    wx.showLoading({
      title: '加载中',
      mask: true,
    })
    // request
    const baseURL = 'https://api-hmugo-web.itheima.net/api/public/v1'
    wx.request({
      ...urlInfo,
      header,
      url: baseURL + urlInfo.url,
      success: (result) => {
        return resolve(result.data.message)
      },
      fail: (error) => {
        return reject(error)
      },
      complete: ()=>{
        requestTime --
        if (requestTime === 0) {
          wx.hideLoading();
        }
      }
    })
  })
}