import {createLayer} from './createLayer'

var loginMessageBox = (function ()  {
  var instance
  return function (message) {
    var opts = {message: '登录信息已过期，请重新登录', btns: ['去登录']}
    if (message) {
      opts.message = message
    }
    return new Promise((resolve, reject) => {
      if (!instance) {
        instance = createLayer(opts)
        
        // 按钮添加点击事件
        var btns = instance.querySelectorAll('[data-class=btn]')
        Array.prototype.forEach.call(btns, (btn, index) => {
          btn.onclick = function () {
            instance.style.display = 'none'
            resolve(index)
          }
        })
      } else {
        instance.style.display = 'block'
      }
    })
  }
})()

export {
  loginMessageBox
}