// pages/index/index.js
// const url = 'http://36kr.com/api/info-flow/main_site/posts?b_id=5053833&per_page=20&_=1475166251729'
const url = 'https://api.douban.com/v2/movie/top250'
Page({
  data:{
    moivelist:[{
    imgsrc: "../../images/AN2.jpg",
    title: "肖申克的救赎",
    introduce: "The shrakwos RedenpeTion(1994)",
    author: "弗兰克*德拉立邦",
    rank: "9.6"
},
{
    imgsrc: "../../images/newplay7.jpg",
    title: "二次元少女",
    introduce: "The shrakwos RedenpeTion(1994)",
    author: "弗兰克*德拉立邦",
    rank: "9.6"
},
{
    imgsrc: "../../images/AN4.jpg",
    title: "四人帮",
    introduce: "The shrakwos RedenpeTion(1994)",
    author: "弗兰克*德拉立邦",
    rank: "9.6"
},
{
    imgsrc: "../../images/AN3.jpg",
    title: "三人成虎",
    introduce: "The shrakwos RedenpeTion(1994)",
    author: "弗兰克*德拉立邦",
    rank: "9.6"
},
{
    imgsrc: "../../images/newplay.jpg",
    title: "任天堂",
    introduce: "The shrakwos RedenpeTion(1994)",
    author: "弗兰克*德拉立邦",
    rank: "9.6"
},
{
    imgsrc: "../../images/newplay4.jpg",
    title: "代表月亮消灭你",
    introduce: "The shrakwos RedenpeTion(1994)",
    author: "东尼大木",
    rank: "9.6"
},
{
    imgsrc: "../../images/newplay2.jpg",
    title: "45度角仰望天空",
    introduce: "The shrakwos RedenpeTion(1994)",
    author: "弗兰克*德拉立邦",
    rank: "9.6"
},
{
    imgsrc: "../../images/newplay8.jpg",
    title: "火影骚年",
    introduce: "The shrakwos RedenpeTion(1994)",
    author: "弗兰克*德拉立邦",
    rank: "9.6"
},
{
    imgsrc: "../../images/ooo.jpg",
    title: "腹黑少女",
    introduce: "The shrakwos RedenpeTion(1994)",
    author: "弗兰克*德拉立邦",
    rank: "9.6"
},
{
    imgsrc: "../../images/AN2.jpg",
    title: "肖申克的救赎",
    introduce: "The shrakwos RedenpeTion(1994)",
    author: "弗兰克*德拉立邦",
    rank: "9.6"
}
]
  },

  cellClick:function(){
      console.log('cell click')
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    wx.request({
      url: url,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
          console.log(res)
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})