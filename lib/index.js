/**
 * An easier way to trigger a store's state
 * based on some conventions.
 *
 * @module setStateMixin
 * @example
 * const INITIAL_STATE = { foo: 'bar' }
 * const MyStore = Reflux.createStore({
 *   mixins: {
 *     setStateMixin(INITIAL_STATE)
 *   }
 * })
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = setStateMixin;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

/**
 * Initializes the mixin.
 *
 * @param {Object} initialState - The initial state for the store
 * @returns {Mixin} - The mixin with the initialState closure
 */

function setStateMixin(initialState) {

  /**
   * @mixin
   */
  return {
    init: function init() {
      this.state = {};
      this.resetState();
    },

    /**
     * @returns {Object} - The initial state passed into the constructor
     */
    getInitialState: function getInitialState() {
      return this.state;
    },

    /**
     * Set the state ala React by passing in only
     * part of the state object to update via merge.
     *
     * @param {Object} state - The state to merge with the current state
     * @param {Boolean} [trigger=true] - Whether to trigger a state update (useful for testing)
     */
    setState: function setState(state, trigger) {
      if (typeof trigger === 'undefined') {
        trigger = true;
      }

      _lodash2['default'].assign(this.state, state);
      if (trigger) {
        this.trigger(this.state);
      }
    },

    /**
     * Resets the state to the initial state passed in
     * by cloning it so as to prevent mutation.
     */
    resetState: function resetState() {
      this.state = _lodash2['default'].cloneDeep(initialState);
      this.setState(this.state);
    }
  };
}

module.exports = exports['default'];
