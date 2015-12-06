var is = require('./is.js');

function reduceMessage(err) {
  var accumulator = [];
  if (is.object(err)) {
    for (var key in err) {
      accumulator.push(key + ': ' + err[key]);
    }
    return accumulator;
  }
  else if (is.string(err)) {
    accumulator.push(err);
    return accumulator;
  }
  else if (is.array(err)) {
    return accumulator; 
  }
  return accumulator;
}

module.exports = function errorMessenger(err) {
  var callerName = arguments.callee &&
    arguments.callee.caller &&
    arguments.callee.caller.name &&
    ' in ' + arguments.callee.caller.name;
  var caller = callerName;
  var message = reduceMessage(err);
  return 'Error' + caller + ' : [ ' + message.join(' | ') + ' ]';
};

