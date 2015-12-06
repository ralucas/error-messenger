'use strict';

var isObject = function isObject(arg) {
  return typeof(arg) === 'object' &&
    !arg.hasOwnProperty('length') &&
    Object.prototype.toString.call(arg) === '[object Object]';
};

var errorMessenger = function errorMessenger(err) {
  var accumulator = '';
  if (isObject(err)) {
    for (var key in err) {
      accumulator += key + ': ' + err[key] + ' ';
    } 
  }
  return this.caller + accumulator;
};

  module.exports = {
    isObject: isObject,
    errorMessenger: errorMessenger
  };
//} else {
  //module.exports = errorMessenger; 
//}
