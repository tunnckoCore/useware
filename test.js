/*!
 * useware <https://github.com/tunnckoCore/useware>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var useware = require('./index')

function fixtureArguments () {
  return useware(arguments)
}

function fixtureMultiple () {
  return useware.apply(null, arguments)
}

function fn1 () {}
function fn2 () {}
function fn3 () {}
function fn4 () {}
function fn5 () {}
function fn6 () {}

var arg1 = [1, [2, fn1, {}, ['a', 'b', fn2]]]
var arg2 = [3, [4, 5], fn4]
var arg3 = ['foo', ['bar', fn5]]

test('useware:', function () {
  test('should accept Arguments object directly and return array', function (done) {
    var actual = fixtureArguments(arg1, fn3, arg2, arg3, fn6)
    var expected = [fn1, fn2, fn3, fn4, fn5, fn6]

    test.deepEqual(actual, expected)
    done()
  })
  test('should accept multiple arguments and return array', function (done) {
    var actual = fixtureMultiple(arg1, fn6, arg2, fn3, arg3)
    var expected = [fn1, fn2, fn6, fn4, fn3, fn5]

    test.deepEqual(actual, expected)
    done()
  })
  test('should not unique, it allow duplicate function values', function (done) {
    var actual = fixtureMultiple([1, fn1, [2, [fn3, [4, 5]], fn2]], fn1, [6, [fn3, 7, 'a']])
    var expected = [fn1, fn3, fn2, fn1, fn3]

    test.deepEqual(actual, expected)
    done()
  })
})
