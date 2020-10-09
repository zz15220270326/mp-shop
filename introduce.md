1. 目录结构介绍
  pages：(页面)
    包含: index(入口) logs(日志)
    每一个文件夹中都有自身的wxml, wxss, js, json(标签, 样式, 逻辑, 配置)
  utils: 自己编写的一些工具函数(js, 可删除)
  app.js: 小程序的入口文件 不能删
  app.json: 小程序的入口配置文件 不能删
  app.wxss: 全局样式配置 
  project.config.json: 项目配置文件 不能删
  sitemap: 配置小程序及其页面是否被微信索引(发布时应用)
2. tabbar的创建(很简单)
  在app.json中添加: 
  "tabBar": {
    list[],
    color: "",
    selectedColor: "", ...
  }  
  注意: 
    1. list.length规定[2, 5]
    2. list中的配置为: "pagePath", "text", "iconPath", "selectedIconPath"
    3. color, selectedColor规定设置为16进制
3. 了解页面内部
  1. 数据绑定:
    demo.js中的data定义, 然后demo.wxml中使用{{data}}进行展示(类似vue)
  2. mustache语法({{}})中的计算
    1. 数字运算 
    2. 字符串拼接 
    3. 三元运算符
4. wx:for循环(遍历数组, 对象)
5. block标签  
6. 条件渲染(wx:if hidden wx:if-wx:elif-wx:else)  
7. 微信的事件(input tap)
  bindinput (e) {
    "e.detail.value"
  }
  this.setData({
    data: newData
  })
  bindtap(e) {
    "e.currentTarget.dataset.operation"
  }
8. 样式篇
  1. rpx (规定所有宽度为750px的机型中的1px为1rpx)
  