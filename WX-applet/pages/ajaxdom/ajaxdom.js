// pages/ajaxdom/ajaxdom.js
import {fetchdata} from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    val:'',
    searchlist:[]//搜索列表的数据
  },
  //input的value值改变的事件 e是事件源
tosearch(e){
  // console.log(e);
  let sval=e.detail.value;
  if(sval===""){
    this.setData({
      searchlist:[]
    });
    return;
  };
  this.setData({
    val:sval
  });
  this.searchajax()
},
searchajax(){
  // 百度搜索关键词  一直输入不可能一直搜索 保证在一定的时间内只触发一次搜索
  let timer;
  clearTimeout(timer);
  timer=setTimeout(()=>{
    let searchurl = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=a";
    let data = {
      wd: this.data.val
    }
    fetchdata(searchurl, data).then(res => {
      let strlen = 18;
      let wdlen = data.wd.length;
      let len = strlen + wdlen;
      // 1--->19 2--->20
      let udata = res.slice(len, -3);
      udata = JSON.parse(udata);
      console.log(udata)
      this.setData({
        searchlist: udata
      })
    })
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    let ajaxurl ="https://www.easy-mock.com/mock/5cc0186b3800c07a52929f6b/shop/list";
    let data=await fetchdata(ajaxurl)
      console.log(data);
   
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