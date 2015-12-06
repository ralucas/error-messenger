
module.exports = function isObject(arg) {
  return typeof arg === 'object' &&
    Object.prototype.toString.call(arg) === '[object Object]';
};

