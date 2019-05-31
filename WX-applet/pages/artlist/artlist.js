// pages/artlist/artlist.js
import { articleData, StartoAarry} from '../../utils/util'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    artData:[],
    nl:3
  },
  todetail(e){
    console.log(e.currentTarget.dataset.id);
    let artid =e.currentTarget.dataset.id;
    wx.navigateTo({
      url:`../detail/detail?artid=${artid}`
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let newdata=articleData.map(item=>{
      item.roating = StartoAarry(item.roating);
      return item;
    })
    console.log(newdata)
    this.setData({
      artData: articleData.slice(0,this.data.nl)
    })
  },
  tobottom(){
    // nl比数组的长度大证明已经没有数据了
    if (this.data.nl>=articleData.length)return;
    // 没滚动一次nl加3
    //滚动到底部
    console.log(123)
    this.setData({
      artData: [...this.data.artData, ...articleData.slice(this.data.nl, this.data.nl+3)],
      nl: this.data.nl + 3
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