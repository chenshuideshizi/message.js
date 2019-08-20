/**
 * 事件监听
 * @param {*} el 
 * @param {*} type 
 * @param {*} handler 
 */
export const addEvent = function addEvent (el, type, handler) {
  if (!el) {
    return
  }
  el.addEventListener(type, handler)
  return {
    remove () {
      removeEvent(el, type, handler)
    }
  }
}

/**
 * 移除事件监听
 * @param {*} el 
 * @param {*} type 
 * @param {*} handler 
 */
export const removeEvent = function removeEvent (el, type, handler) {
  el.removeEventListener(type, handler)
}