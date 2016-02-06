/*!
 * useware <https://github.com/tunnckoCore/useware>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var filter = require('arr-filter-fn')
var isArguments = require('is-arguments')
var manageArguments = require('manage-arguments')

module.exports = function useware (val) {
  var args = isArguments(val) ? manageArguments(val) : manageArguments(arguments)
  return filter(args)
}
