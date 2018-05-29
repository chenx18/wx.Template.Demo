class HttpsGet {
  constructor() {}

  getBanner() {
    let httpUrl ="http://toutiao-ali.juheapi.com/toutiao/index?type=top";
    return new Promise((resolve, reject)=> {
      wx.request({
        url: httpUrl,
        header: {
          'Authorization': 'APPCODE 48c86ce300f7405bb9ee832c76aacb86'
        },
        success: (res)=> {
          console.log(res);
          resolve(res);
        }
      })
    })
  }
}
export default new HttpsGet();