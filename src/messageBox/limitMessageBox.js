import {createLayer} from './createLayer'

var limitMessageBox = (function ()  {
  var instance
  return function (message) {
    var opts = { message: '活动未开始或已结束', btns: ['我知道了'], textAlign: 'center'}
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
  limitMessageBox
}