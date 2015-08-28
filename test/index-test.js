/* eslint no-unused-expressions:0 */

import setStateMixin from '../src'

describe('setStateMixin', () => {
  let state
  let obj
  let spy

  beforeEach(() => {
    state = {
      foo: 'bar',
    }
    obj = setStateMixin(state)

    spy = sinon.spy()
    obj.trigger = spy

    obj.init()
  })

  it('should set initial state', () => {
    expect(obj.state).to.eql(state)
  })

  it('should set state', () => {
    const newState = {
      foo: 'baz',
      other: true,
    }
    expect(obj.state).to.eql(state)
    obj.setState(newState)
    expect(obj.state).to.eql(newState)
  })

  it('should not trigger if option is passed', () => {
    expect(obj.state).to.eql(state)
    const newState = {
      foo: 'baz',
      other: true,
    }
    obj.setState(newState, false)
    expect(obj.state).to.eql(newState)
    expect(spy).to.have.been.called
  })

  it('should reset state', () => {
    const newState = {
      foo: 'bing',
    }
    expect(obj.state).to.eql(state)
    obj.setState(newState)
    expect(obj.state).to.eql(newState)
    obj.resetState()
    expect(obj.state).to.eql(state)
  })
})
