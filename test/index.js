var assert = require('assert');
var errorMessenger = require('../lib');
var is = require('../lib/is');

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
      assert.equal(testMessage, 'Error in testFunction : [ code: 10 | message: Test ]');
    });

  });

  describe('is', function() {
    describe('is.object', function() {
      var trueArray = [{}, {'one': 1}, {0: '0', 1: '1', 2: '2'}];
      var falseArray = [[], '', function() {}];

      trueArray.forEach(function(t) {
        it('should return true', function() {
          assert(is.object(t));
        });
      });

      falseArray.forEach(function(f) {
        it('should return false', function() {
          assert.equal(is.object(f), false);
        });
      });
    });

    describe('is.string', function() {
      var trueArray = ['1', 'hello', ''];
      var falseArray = [[], {}, function() {}];

      trueArray.forEach(function(t) {
        it('should return true', function() {
          assert(is.string(t));
        });
      });

      falseArray.forEach(function(f) {
        it('should return false', function() {
          assert.equal(is.string(f), false);
        });
      });
    });

    describe('is.array', function() {
      var trueArray = [['1'], [1,2,3,4], [{}, {1: 'hi'}, {'hi': 1}]];
      var falseArray = ['testing', {}, function() {}];

      trueArray.forEach(function(t) {
        it('should return true', function() {
          assert(is.array(t));
        });
      });

      falseArray.forEach(function(f) {
        it('should return false', function() {
          assert.equal(is.array(f), false);
        });
      });
    });
  });

});
