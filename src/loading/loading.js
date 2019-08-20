import { createLoading } from './createLoading'

var loading = (function () {
  var instance
  return function (isShow) {
    if (!instance) {
      instance = createLoading()
    }
    if (isShow) {
      instance.style.display = 'block'
    } else {
      instance.style.display = 'none'
    }
  }
})()

export {
  loading
}