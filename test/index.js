var assert = require('assert');
var errorMessenger = require('../lib');
var isObject = require('../lib/isObject');

describe('error-messenger', function () {

  describe('errorMessenger', function() {
    it('should return a string', function() {
      var testMessage = errorMessenger();
      assert.equal(typeof testMessage, 'string');
    });

    it('should return the object passed in the error message ' +
        'and stringified', function() {
      var err = {code: 55, message: 'This is a test'};
      var testMessage = errorMessenger(err);
      assert(/55/.test(testMessage));
      assert(/This is a test/.test(testMessage));
      assert(/code\:/.test(testMessage));
      assert(/message\:/.test(testMessage));
    });

    it('should include the function caller name', function() {
      var err = {code: 10, message: 'Test'};
      var testMessage;
      function testFunction(e) {
        testMessage = errorMessenger(e);
      }
      testFunction(err);
      assert(/testFunction/.test(testMessage));
    });

  });

  describe('isObject', function() {
    var trueArray = [{}, {'one': 1}, {0: '0', 1: '1', 2: '2'}];
    var falseArray = [[], '', function() {}];

    trueArray.forEach(function(t) {
      it('should return true', function() {
        assert(isObject(t));
      });
    });

    falseArray.forEach(function(f) {
      it('should return false', function() {
        assert.equal(isObject(f), false);
      });
    });
  });
});
