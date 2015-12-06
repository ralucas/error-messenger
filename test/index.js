'use strict';

var assert = require('assert');
var e = require('../lib');

describe('error-messenger', function () {

  describe('errorMessenger', function() {
    it('should return a string', function() {
      var testMessage = e.errorMessenger();
      assert.equal(typeof(testMessage), 'string');
    });
  });

  describe('isObject', function() {
    var trueArray = [{}, {'one': 1}, {0: '0', 1: '1', 2: '2'}];
    var falseArray = [[], '', function() {}];

    trueArray.forEach(function(t) {
      it('should return true', function() {
        assert(e.isObject(t));
      });
    });

    falseArray.forEach(function(f) {
      it('should return false', function() {
        assert.equal(e.isObject(f), false);
      });
    });
  
  });
});
