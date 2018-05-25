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

/**
 * promise
 */
function getSettings() {
  return new Promise((reslove,reject)=> {
    // 获取用户信息
    wx.getSetting({
      success: (res) => {
        let isOk;
        if (!res.authSetting['scope.userLocation']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.authorize({
            scope: 'scope.userLocation',
            success: (res) => {
              wx.getLocation()
              isOk = true;
              console.log(isOk);
              reslove(isOk);
            },
            fail() {
              isOk = false;
              console.log(isOk);
              reslove(isOk);
            }
          })
        }
      }
    })
  })
}

function getPage(reslove,reject) {
  getSettings().then((res) => {
    console.log(res);
    reslove(res);
  });
}



module.exports = {
  formatTime: formatTime,
  getSettings: getSettings,
  getPage: getPage
}
