var that;
const app = getApp()
var id = '';
var nextData = '';
var fromData = '';
var DateUtil = require("../../utils/dateUtil.js");
var months = [];
var day_go = null;
var day_back = null;
var result;

Page({

   /**
    * 页面的初始数据
    */
   data: {
      months: [],
      nights: 0,
   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function(options) {
      var date = new Date;
      var years = date.getFullYear(); 
      id = options.id;
      nextData = options.nextData;
      fromData = options.fromData;
      console.log(nextData)
      console.log(fromData)
      that = this;
      that.GetRoomPrice(id);
      that.setData({
         years: years
      })
   
   },
   nodataTap: function() {
      day_go = null;
      day_back = null;
      that.setData({
         nights: 0,
         day_go: null,
         day_back: null,
         createData: null,
         toData: null,
      })
   },
   GetRoomPrice: function (id) {
      result = { "result": { "months": { "2018-11": [{ "date": "2018-11-03T00:00:00", "price": 388.99 }, { "date": "2018-11-04T00:00:00", "price": 388.99 }, { "date": "2018-11-05T00:00:00", "price": 388.99 }, { "date": "2018-11-06T00:00:00", "price": 388.99 }, { "date": "2018-11-07T00:00:00", "price": 388.99 }, { "date": "2018-11-08T00:00:00", "price": 388.99 }, { "date": "2018-11-09T00:00:00", "price": 388.99 }, { "date": "2018-11-10T00:00:00", "price": 388.99 }, { "date": "2018-11-11T00:00:00", "price": 388.99 }, { "date": "2018-11-12T00:00:00", "price": 388.99 }, { "date": "2018-11-13T00:00:00", "price": 388.99 }, { "date": "2018-11-14T00:00:00", "price": 388.99 }, { "date": "2018-11-15T00:00:00", "price": 388.99 }, { "date": "2018-11-16T00:00:00", "price": 388.99 }, { "date": "2018-11-17T00:00:00", "price": 388.99 }, { "date": "2018-11-18T00:00:00", "price": 388.99 }, { "date": "2018-11-19T00:00:00", "price": 388.99 }, { "date": "2018-11-20T00:00:00", "price": 388.99 }, { "date": "2018-11-21T00:00:00", "price": 388.99 }, { "date": "2018-11-22T00:00:00", "price": 388.99 }, { "date": "2018-11-23T00:00:00", "price": 388.99 }, { "date": "2018-11-24T00:00:00", "price": 388.99 }, { "date": "2018-11-25T00:00:00", "price": 388.99 }, { "date": "2018-11-26T00:00:00", "price": 388.99 }, { "date": "2018-11-27T00:00:00", "price": 388.99 }, { "date": "2018-11-28T00:00:00", "price": 388.99 }, { "date": "2018-11-29T00:00:00", "price": 388.99 }, { "date": "2018-11-30T00:00:00", "price": 388.99 }], "2018-12": [{ "date": "2018-12-01T00:00:00", "price": 388.99 }, { "date": "2018-12-02T00:00:00", "price": 388.99 }, { "date": "2018-12-03T00:00:00", "price": 388.99 }, { "date": "2018-12-04T00:00:00", "price": 388.99 }, { "date": "2018-12-05T00:00:00", "price": 388.99 }, { "date": "2018-12-06T00:00:00", "price": 388.99 }, { "date": "2018-12-07T00:00:00", "price": 388.99 }, { "date": "2018-12-08T00:00:00", "price": 388.99 }, { "date": "2018-12-09T00:00:00", "price": 388.99 }, { "date": "2018-12-10T00:00:00", "price": 388.99 }, { "date": "2018-12-11T00:00:00", "price": 388.99 }, { "date": "2018-12-12T00:00:00", "price": 388.99 }, { "date": "2018-12-13T00:00:00", "price": 388.99 }, { "date": "2018-12-14T00:00:00", "price": 388.99 }, { "date": "2018-12-15T00:00:00", "price": 388.99 }, { "date": "2018-12-16T00:00:00", "price": 388.99 }, { "date": "2018-12-17T00:00:00", "price": 388.99 }, { "date": "2018-12-18T00:00:00", "price": 388.99 }, { "date": "2018-12-19T00:00:00", "price": 388.99 }, { "date": "2018-12-20T00:00:00", "price": 388.99 }, { "date": "2018-12-21T00:00:00", "price": 388.99 }, { "date": "2018-12-22T00:00:00", "price": 388.99 }, { "date": "2018-12-23T00:00:00", "price": 388.99 }, { "date": "2018-12-24T00:00:00", "price": 388.99 }, { "date": "2018-12-25T00:00:00", "price": 388.99 }, { "date": "2018-12-26T00:00:00", "price": 388.99 }, { "date": "2018-12-27T00:00:00", "price": 388.99 }, { "date": "2018-12-28T00:00:00", "price": 388.99 }, { "date": "2018-12-29T00:00:00", "price": 388.99 }, { "date": "2018-12-30T00:00:00", "price": 388.99 }, { "date": "2018-12-31T00:00:00", "price": 388.99 }], "2019-01": [{ "date": "2019-01-01T00:00:00", "price": 388.99 }, { "date": "2019-01-02T00:00:00", "price": 388.99 }, { "date": "2019-01-03T00:00:00", "price": 388.99 }, { "date": "2019-01-04T00:00:00", "price": 388.99 }, { "date": "2019-01-05T00:00:00", "price": 388.99 }, { "date": "2019-01-06T00:00:00", "price": 388.99 }, { "date": "2019-01-07T00:00:00", "price": 388.99 }, { "date": "2019-01-08T00:00:00", "price": 388.99 }, { "date": "2019-01-09T00:00:00", "price": 388.99 }, { "date": "2019-01-10T00:00:00", "price": 388.99 }, { "date": "2019-01-11T00:00:00", "price": 388.99 }, { "date": "2019-01-12T00:00:00", "price": 388.99 }, { "date": "2019-01-13T00:00:00", "price": 388.99 }, { "date": "2019-01-14T00:00:00", "price": 388.99 }, { "date": "2019-01-15T00:00:00", "price": 388.99 }, { "date": "2019-01-16T00:00:00", "price": 388.99 }, { "date": "2019-01-17T00:00:00", "price": 388.99 }, { "date": "2019-01-18T00:00:00", "price": 388.99 }, { "date": "2019-01-19T00:00:00", "price": 388.99 }, { "date": "2019-01-20T00:00:00", "price": 388.99 }, { "date": "2019-01-21T00:00:00", "price": 388.99 }, { "date": "2019-01-22T00:00:00", "price": 388.99 }, { "date": "2019-01-23T00:00:00", "price": 388.99 }, { "date": "2019-01-24T00:00:00", "price": 388.99 }, { "date": "2019-01-25T00:00:00", "price": 388.99 }, { "date": "2019-01-26T00:00:00", "price": 388.99 }, { "date": "2019-01-27T00:00:00", "price": 388.99 }, { "date": "2019-01-28T00:00:00", "price": 388.99 }, { "date": "2019-01-29T00:00:00", "price": 388.99 }, { "date": "2019-01-30T00:00:00", "price": 388.99 }, { "date": "2019-01-31T00:00:00", "price": 388.99 }] } }, "targetUrl": null, "success": true, "error": null, "unAuthorizedRequest": false, "__abp": true };
            var date = new Date();
            var month = date.getMonth();
            var year = date.getFullYear();
            months = [];
      console.log(result.result.months)
            for (var monthkey in result.result.months) {
               var yearToCheck = parseInt(monthkey.slice(0, 4));
               var monthToCheck = parseInt(monthkey.slice(5, 7));
               var days = result.result.months[monthkey];
               months.push(generateMonthDate(yearToCheck, monthToCheck - 1, days));
            }
            this.setData({
               today: new Date(date.toDateString()).getTime(),
               months: months
            });
        
   },
   /**
    * 生命周期函数--监听页面初次渲染完成
    */
   onReady: function() {

   },

   /**
    * 生命周期函数--监听页面显示 
    */
   onShow: function() {
      day_go = null;
      day_back = null;
   },

   /**
    * 生命周期函数--监听页面隐藏
    */
   onHide: function() {

   },

   /**
    * 生命周期函数--监听页面卸载
    */
   onUnload: function() {

   },

   /**
    * 页面相关事件处理函数--监听用户下拉动作
    */
   onPullDownRefresh: function() {

   },

   /**
    * 页面上拉触底事件的处理函数
    */
   onReachBottom: function() {

   },

   /**
    * 用户点击右上角分享
    */
   onShareAppMessage: function() {

   },
   saveTap:function(){
      if (!that.data.createData && that.data.createData==""){
         app.alert('请填写入住日期再点击保存！')
      }else{
         if (!that.data.toData && that.data.toData == ""){
            app.alert('请填写退房日期再点击保存！')
         }else{
            var pages = getCurrentPages();
            var prevPage = pages[pages.length - 2];
            prevPage.setData({
               todayNum:that.data.nights,
               Data1: that.data.createData,
               Data2: that.data.toData
            })
            wx.navigateBack({

               delta: prevPage,
            })
         }
      }
     
    
   },
   select: function(e) {
      var dayData = e.currentTarget.dataset.day;
      if (dayData.enable && dayData.price != '') {
         if (!day_go) {
            //没有出发日期
            if (day_back != null) {
               if (!checkEveryDayBetween(dayData.time, day_back)) {
                  wx.showToast({
                     title: '要选的日期不是连续的',
                     icon: 'none'
                  })
                  return;
               }
            }
            day_go = dayData.time;
            this.setData({
               day_go: day_go,
               day_back: day_back
            });
            that.checkNights();
         } else if (!day_back) {
           
            //没有返回日期
            if (dayData.time > day_go) {
               //所选日期在出发后
               if (checkEveryDayBetween(day_go, dayData.time)) {
                  day_back = dayData.time;
                  this.setData({
                     day_go: day_go,
                     day_back: day_back
                  });
                  that.checkNights();
               } else {
                  wx.showToast({
                     title: '要选的日期不是连续的',
                     icon: 'none'
                  })
               }
            } else {
               //所选日期在出发前
               day_go = dayData.time;
               this.setData({
                  day_go: day_go,
                  day_back: day_back
               });
               that.checkNights();
            }
         } else {
            //出发和结束都有了
            console.log(dayData.time+'__________select')
            console.log(day_go + '__________selectday_go')
            console.log(day_back + '__________selectday_back')
            if (dayData.time > day_go && dayData.time < day_back &&day_back<day_go){
               day_back = null;
               this.setData({
                  day_go: day_go,
                  day_back: day_back,
               });
               that.checkNights();
            }else{
               this.setData({
                  day_go: day_go,
                  day_back: day_back,
               });
               that.checkNights();
            }
           
            if (dayData.time > day_go && dayData.time < day_back) {
               
               //所选日期在两者之间
               var toFront = dayData.time - day_go;
               var toBack = day_back - dayData.time;
               if (toFront > toBack) {
                  day_back = dayData.time;
               } else {
                  day_go = dayData.time;
               }
               this.setData({
                  day_go: day_go,
                  day_back: day_back
               });
               that.checkNights();
            } else if (dayData.time < day_go) {
               //所选日期在入住前
               if (checkEveryDayBetween(dayData.time, day_back)) {
                  day_go = dayData.time;
                  this.setData({
                     day_go: day_go,
                     day_back: day_back
                  });
                  that.checkNights();
               } else {
                  wx.showToast({
                     title: '要选的日期不是连续的',
                     icon: 'none'
                  })
               }
            } else if (dayData.time > day_back) {
               //所选日期在退房后
               if (checkEveryDayBetween(day_go, dayData.time)) {
                  day_back = dayData.time;
                  this.setData({
                     day_go: day_go,
                     day_back: day_back
                  });
                  that.checkNights();
               } else {
                  wx.showToast({
                     title: '要选的日期不是连续的',
                     icon: 'none'
                  })
               }
            } else if (dayData.time == day_back) {
               day_back = null;
               this.setData({
                  day_go: day_go,
                  day_back: day_back
               });
               that.checkNights();
            } else if (dayData.time == day_go) {
               wx.showToast({
                  title: '请点清除按钮清除。',
                  icon: 'none'
               })
               // day_go = null;
               // this.setData({
               //    day_go: day_go,
               //    day_back: day_back
               // });
               // that.checkNights();
            }
         }
      }
   },
   checkNights: function() {
      if (this.data.day_back == null || this.data.day_go == null) {
         this.setData({
            nights: 0
         })
      }else{
         var nights = Math.round((this.data.day_back - this.data.day_go) / 1000 / 60 / 60 / 24);
         if (nights <= 0) {
            nights = 1;
         }
         this.setData({
            nights: nights
         })
      }
      if(day_go!=null){
         that.setData({
            createData: DateUtil.toDateString(new Date(day_go))
         })
      }else{
         that.setData({
            createData: ""
         })
      }
      if(day_back!=null){
         that.setData({
            toData: DateUtil.toDateString(new Date(day_back)),
         })
      }else{
         that.setData({
            toData: "",
         })
      }

      
      
   }
})

function generateMonthDate(year, month, dayDatas) {
   var days = DateUtil.getDaysInOneMonth(year, month + 1);
   
   var monthString = '' + (month + 1);
   if (monthString.length == 1) {
      monthString = '0' + monthString;
   }
   var monthData = {
      year: year,
      month: monthString,
      days: []
   };
   var gap = parseInt(new Date(year, month, 1).getDay());
  
   for (var i = 0; i < gap; i++) {
      monthData.days.push({
         enable: false,
         text: "",
         time: 0,
         price: ''
      });
   }

   for (var i = 1; i <= days; i++) {
      var date = new Date(year, month, i);
      var dateFormalString = DateUtil.toDateString(date);
      var dayData = undefined;
      dayDatas.forEach(item => {
         let cs = item.date.slice(0, 4) + '/' + item.date.slice(5, 7) + '/' + item.date.slice(8, 10)
         if (cs == dateFormalString) {
            dayData = item;
         }
      });
      
      monthData.days.push({
         enable: (date.getTime() > new Date().getTime() || date.toDateString() == new Date().toDateString()) && dayData,
         text: date.getDate(),
         time: date.getTime(),
         price: dayData ? dayData.price : ''
      });
   }
 
   return monthData;
}


function checkEveryDayBetween(timefrom, timeTo) {
   var allpass = true;
   for (var t1 = timefrom; t1 < (timeTo + 1); t1 += (1000 * 60 * 60 * 24)) {
      var date = new Date(t1);
      var dateString = DateUtil.toDateString(date);
      var thisDatePass = false;
      
      for (var monthkey in result.result.months) {
         var days = result.result.months[monthkey]
   
         for (var dayData of days) {
            let cs = dayData.date.slice(0, 4) + '/' + dayData.date.slice(5, 7) + '/' + dayData.date.slice(8, 10)
            if (cs == dateString) {
               thisDatePass = true;
               break;
            }
         }
         if (thisDatePass) {
            break;
         }
      }

      if (!thisDatePass) {
         allpass = false;
         break;
      }
   }
   return allpass;
}