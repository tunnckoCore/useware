/*!
 * useware <https://github.com/tunnckoCore/useware>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var filter = require('arr-filter-fn')
var flatten = require('flatten-arguments')

module.exports = function useware () {
  var args = flatten.apply(this, arguments)
  return filter(args)
}
