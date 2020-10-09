export const getSetting = () => {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      success: (result) => {
        resolve(result)
      },
      fail: (error) => {
        reject(error)
      }
    })
  })
}

export const openSetting = () => {
  return wx.openSetting({
    success: (result) => {
      return result
    },
    fail: (error) => {
      return error
    }
  })
}

export const chooseAddress = () => {
  return new Promise((resolve, reject) => {
    wx.chooseAddress({
      success: (result) => {
        resolve(result)
      },
      fail: (error) => {
        reject(error)
      }
    })
  })
}

export const showModal = (content) => {
  return new Promise((resolve, reject) => {
    wx.showModal({
      title: '提示',
      ...content,
      success: (result) => {
        resolve(result)
      },
      fail: (error) => {
        reject(error)
      }
    });
  })
}

export const showToast = (title, icon = 'none', duration = 1000) => {
  return new Promise((resolve, reject) => {
    wx.showToast({
      title,
      icon,
      duration,
      mask: false,
      success: (result)=>{
        resolve(result)
      },
      fail: (error) => {
        reject(error)
      }
    });
  })
}

export const login = () => {
  return new Promise((resolve, reject) => {
    wx.login({
      timeout:10000,
      success: (result)=>{
        resolve(result)
      },
      fail: (error)=>{
        reject(error)
      },
    });
  })
}

export const requestPayment = (pay) => {
  return new Promise((resolve, reject) => {
    wx.requestPayment({
      ...pay,
      success: (result)=>{
        resolve(result)
      },
      fail: (error)=>{
        reject(error)
      },
    });
  })
}