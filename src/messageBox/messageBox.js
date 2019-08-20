import {createLayer} from './createLayer'

var messageBox = (function ()  {
  return function (options) {
    return new Promise((resolve, reject) => {
       var instance = createLayer(options)
        
        // 按钮添加点击事件
        var btns = instance.querySelectorAll('[data-class=btn]')
        Array.prototype.forEach.call(btns, (btn, index) => {
          btn.onclick = function () {
            document.body.removeChild(instance)
            resolve(index)
          }
        })
    })
  }
})()

export {
  messageBox
}