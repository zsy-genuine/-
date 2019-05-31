// pages/detail/detail.js
import {articleData} from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    singleData:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    //传过来的参数会放在options对象上面
    let {artid}=options;
    console.log(artid);
    // 根据id找到相应的数据
    let single=articleData.find(item=>item.id==artid)
    // 设置单条数据
    this.setData({
      singleData:single
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})