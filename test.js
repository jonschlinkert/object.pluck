/*!
 * object.pluck <https://github.com/jonschlinkert/object.pluck>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var pluck = require('./');

describe('pluck', function() {
  it('should pluck properties from the source object.', function () {
    var fixture = {
      a: {
        aaa : 'foo',
        bbb : 'alpha'
      },
      b: {
        aaa : 'bar',
        bbb : 'beta'
      },
      c: {
        aaa : 'baz',
        bbb : 'gamma'
      }
    };
    pluck(fixture, 'aaa').should.eql({a: 'foo', b: 'bar', c: 'baz'});
    pluck(fixture, 'bbb').should.eql({a: 'alpha', b: 'beta', c: 'gamma'});
  });

  it('should pluck properties from the source object.', function () {
    var fixture = {
      a: {locals : {first: 'Brian'}, options : {foo: true}},
      b: {locals : {last: 'Woodward'}, options : {bar: false}}
    };
    pluck(fixture, 'locals').should.eql({a: {first: 'Brian'}, b: {last: 'Woodward'}});
    pluck(fixture, 'options').should.eql({a: {foo: true}, b: {bar: false}});
  });

  it('should use property paths to get nested values from the source object.', function () {
    var fixture = {
      a: {locals : {name: {first: 'Brian'}}},
      b: {locals : {name: {last: 'Woodward'}}}
    };
    pluck(fixture, 'locals.name').should.eql({a: {first: 'Brian'}, b: {last: 'Woodward'}});
  });
});
