var dateUtil = {
  getDaysInOneMonth: function (year, month) {
    month = parseInt(month, 10);
    var d = new Date(year, month, 0);
    return d.getDate();
  },
  toDateString:function(date){
    var year = '' + date.getFullYear();
    var month = '' + (date.getMonth() + 1)
    if (month.length == 1) {
      month = '0' + month;
    }
    var day = '' + (date.getDate())
    if (day.length == 1) {
      day = '0' + day;
    }
    return year +"/" + month +"/" + day;
  }
}

module.exports = dateUtil;