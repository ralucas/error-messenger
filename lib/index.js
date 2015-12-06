var isObject = require('./isObject.js');

module.exports = function errorMessenger(err) {
  var accumulator = [];
  var callerName = arguments.callee &&
    arguments.callee.caller &&
    arguments.callee.caller.name &&
    ' in ' + arguments.callee.caller.name;
  var caller = callerName;
  if (isObject(err)) {
    for (var key in err) {
      accumulator.push(key + ': ' + err[key]);
    }
  }
  return 'Error' + caller + ' : [ ' + accumulator.join(' | ') + ' ]';
};

