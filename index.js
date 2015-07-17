/*!
 * useware <https://github.com/tunnckoCore/useware>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var filter = require('arr-filter')
var flatten = require('arr-flatten')
var isArguments = require('is-arguments')
var manageArguments = require('manage-arguments')

module.exports = function useware (val) {
  var args = isArguments(val) ? manageArguments(val) : manageArguments(arguments)
  var middlewares = filter(flatten(args), function (val) {
    return typeof val === 'function'
  })
  return middlewares
}
