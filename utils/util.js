const formatTime = date => {
   const year = date.getFullYear()
   const month = date.getMonth() + 1
   const day = date.getDate()
   const hour = date.getHours()
   const minute = date.getMinutes()
   const second = date.getSeconds()

   return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
   n = n.toString()
   return n[1] ? n : '0' + n
}
function alert(content) {
   wx.showModal({
      title: '提示',
      mask: true,
      confirmColor: "#F75473",
      showCancel: false,
      content,
   })
}
function toast(content) {
   wx.showToast({
      title: content,
      icon: 'none',
      duration: 1000
   })
};

module.exports = {
   alert: alert,
   toast: toast,
   formatTime: formatTime
}
