
var createLayer = function (options) {

  if (typeof options === 'string') {
    options = {message: options}
  }

  var message = options.message || ''
  var btns = options.btns || ['确定', '取消']
  var textAlign = options.textAlign || ''

  var styleStr
  if (textAlign === 'center') {
    styleStr = `style="width: 100%; text-align: center;"`
  }

  // 创建父元素
  var div = document.createElement('div')
  div.style.cssText = 'position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 9999; font-size: .3rem; color: #333;'
  div.dataset.id = 'login-layer'
  div.style.display = 'block'

  var btnsStr = ''
  for (let i = 0, l = btns.length; i < l; i++) {
    var btn = btns[i]
    let btnText = btn.label || btn
    let borderRight = i !== l -1 ? 'border-right: 1px solid #ccc' : ''
    let classStr = btn.className ? `class=${btn.className}` : ''
    btnsStr += `<div data-class="btn" ${classStr} style="flex: 1; display: flex; justify-content: center; align-items: center; height: 100%;${borderRight}">${btnText}</div>`
  }

  div.innerHTML = `<div ontouchmove="javascript: return false;" data-class="layer-mask" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; background: rgba(0, 0, 0, .5);"></div>\
                  <div data-class="layer-container" style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); display: flex; flex-direction: column; width: 6.1rem; min-height: 3.4rem; overflow: hidden; border-radius: 0.24rem; background: rgba(255, 255, 255);">\
                      <div data-class="layer-main" style="flex: 1; display: flex; align-items: center; box-sizing: border-box; padding: .4rem;">\
                          <div ${styleStr}>${message}</div>\
                      </div>\
                      <div data-class="btns" style="display: flex; justify-content: center; align-items: center;height: 1rem; border-top: 1px solid #d0d5d8; font-size: .32rem;">\
                          ${btnsStr}\
                      </div>\
                  </div>`

  document.body.appendChild(div)

  return div
}

export {
  createLayer
}