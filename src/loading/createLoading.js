import { loadingSrc } from './loadingSrc'

const createLoading = function () {
  var div = document.createElement('div')
  div.dataset.name = 'loading'
  div.ontouchmove = 'javascript: return false';
  div.style.cssText = `
    position: fixed; 
    top: 0; right: 0; 
    bottom: 0; 
    left: 0; 
    z-index: 9000;
  `

  var maskStyle = `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `

  var containerStyle = `
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: .78rem;
    height: .78rem;
  `

  var srcStyle = `
    display: block;
    width: 100%;
    height: 100%;
  `

  div.innerHTML = `
    <div data-name="loading-mask" style="${maskStyle}"></div>
    <div data-name="loading-container" style="${containerStyle}">
      <img data-name="loading-src" src="${loadingSrc}" style="${srcStyle}" />
    </div>
  `
  document.body.appendChild(div)

  return div
}

export {
  createLoading
}