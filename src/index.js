import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  // Lodash 现在通过此脚本文件引入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());