Page({

  login: function() {
    wx.login({
      success: function(res) {
        if (res.code) {
          wx.request({
            url: 'https://test.com/login',
            data: {
              username: 'zhangsan', // 用户输入的账号
              password: 'pwd123456', // 用户输入的密码
              code: res.code
            },
            success: function(res) {
              // 登录成功
              if (res.statusCode === 200) {
                console.log(res.data.sessionId) // 服务器回包内容
              }
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    logo: '/images/logo.jpg',
    welcome: 'welcome'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log("welcome.js ---onLoad start")

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log("welcome.js ---onReady start")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log("welcome.js ---onShow start")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.log("welcome.js ---onHide start")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    console.log("welcome.js ---onUnload start")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    console.log("welcome.js ---onPullDownRefresh start")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log("welcome.js ---onReachBottom start")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    console.log("welcome.js ---onShareAppMessage start")
  }
})