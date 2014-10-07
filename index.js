/*!
 * object.pluck <https://github.com/jonschlinkert/object.pluck>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var map = require('object.map');
var get = require('get-value');

module.exports = function pluck(o, key) {
  return map(o, function (obj) {
    return get(obj, key);
  });
};
