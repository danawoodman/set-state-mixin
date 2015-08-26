/**
 * An easier way to trigger a store's state
 * based on some conventions.
 *
 * @module
 * @example
 * const INITIAL_STATE = { foo: 'bar' }
 * const MyStore = Reflux.createStore({
 *   mixins: {
 *     SetStateMixin(INITIAL_STATE)
 *   }
 * })
 */

var _ = require('lodash')

/**
 * Initializes the mixin.
 *
 * @param {Object} initialState - The initial state for the store
 * @returns {Mixin} - The mixin with the initial state closure
 */
module.exports = function SetStateMixin(initialState) {

  /**
   * @mixin
   */
  return {
    init: function () {
      this.state = {}
      this.resetState()
    },

    /**
     * @returns {Object} - The initial state passed into the constructor
     */
    getInitialState: function () {
      return this.state
    },

    /**
     * Set the state ala React by passing in only
     * part of the state object to update via merge.
     *
     * @param {Object} state - The state to merge with the current state
     * @param {Boolean} [trigger=true] - Whether to trigger a state update (useful for testing)
     */
    setState: function (state, trigger) {
      if (typeof trigger === 'undefined') {
        trigger = true
      }

      _.assign(this.state, state)
      if (trigger) {
        this.trigger(this.state)
      }
    },

    /**
     * Resets the state to the initial state passed in
     * by cloning it so as to prevent mutation.
     */
    resetState: function () {
      this.state = _.cloneDeep(initialState)
      this.setState(this.state)
    },
  }
}
