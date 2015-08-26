/* globals describe, it */
/* eslint no-unused-expressions:0 */

var sinon = require('sinon')
var chai = require('chai')
var sinonChai = require('sinon-chai')
chai.use(sinonChai)
var expect = chai.expect
var mixin = require('./')


describe('setStateMixin', function () {
  var state
  var obj
  var spy

  beforeEach(function () {
    state = {
      foo: 'bar',
    }
    obj = mixin(state)

    spy = sinon.spy()
    obj.trigger = spy

    obj.init()
  })

  it('should set initial state', function () {
    expect(obj.state).to.eql(state)
  })

  it('should set state', function () {
    var newState = {
      foo: 'baz',
      other: true,
    }
    expect(obj.state).to.eql(state)
    obj.setState(newState)
    expect(obj.state).to.eql(newState)
  })

  it('should not trigger if option is passed', function () {
    expect(obj.state).to.eql(state)
    var newState = {
      foo: 'baz',
      other: true,
    }
    obj.setState(newState, false)
    expect(obj.state).to.eql(newState)
    expect(spy).to.have.been.called
  })

  it('should reset state', function () {
    var newState = {
      foo: 'bing',
    }
    expect(obj.state).to.eql(state)
    obj.setState(newState)
    expect(obj.state).to.eql(newState)
    obj.resetState()
    expect(obj.state).to.eql(state)
  })
})
