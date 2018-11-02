//index.js
//获取应用实例
const app = getApp()
var fromdata = '2018/09/26';
var nextdata = '2018/09/27';
Page({
  data: {
  },
   tzTap:function(){
      wx.navigateTo({
         url: "/pages/datePicker/datePicker?id=" + 0 + "&nextData=" + nextdata + "&fromData=" + fromdata,
      })
   },
  onLoad: function () {

  },

})
