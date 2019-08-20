function toast (options) {
  options = typeof options === 'string' ? {message: options} : options

  var toastStyle =  `
    top: 0;
	  left: 0;
	  width: 100%;
	  height: 100%;
	  z-index: 9998;
	  position: fixed;
  `

var toastTextStyle =  `
    position: fixed;
	  left: 50%;
    top: 50%;
	  transform: translate(-50%, -50%);
	  z-index: 9999;
    max-width: 4rem;
    padding: 0.28rem;
    line-height: 1;
	  text-align: center;
	  color: #fff;
	  background: #000;
	  border-radius: .1rem;
	  font-size: 0.28rem;
  `

  var toastDiv = document.createElement('div')
  toastDiv.innerHTML = `<div data-class="toast" style="${toastStyle}"></div><div data-class="toast-text" style="${toastTextStyle}">${options.message}</div>`,
  document.body.appendChild(toastDiv);
  var timer = setTimeout(()=>{
      clearTimeout(timer),
      document.body.removeChild(toastDiv)
  }, options.duration || 400)
}
export {
  toast
}