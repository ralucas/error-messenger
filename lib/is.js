
module.exports = {
  object: function object(arg) {
    return typeof arg === 'object' &&
      Object.prototype.toString.call(arg) === '[object Object]';
  },
  string: function string(arg) {
    return typeof arg === 'string' &&
      Object.prototype.toString.call(arg) === '[object String]';  
  },
  array: function array(arg) {
    return typeof arg === 'object' &&
      Array.isArray(arg) &&
      Object.prototype.toString.call(arg) === '[object Array]';  
  }
};

