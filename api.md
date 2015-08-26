<a name="module_index"></a>
## index
An easier way to trigger a store's state
based on some conventions.

**Example**  
```js
const INITIAL_STATE = { foo: 'bar' }
const MyStore = Reflux.createStore({
  mixins: {
    SetStateMixin(INITIAL_STATE)
  }
})
```

* [index](#module_index)
  * [module.exports(initialState)](#exp_module_index--module.exports) ⇒ <code>Mixin</code> ⏏
    * [~getInitialState()](#module_index--module.exports..getInitialState) ⇒ <code>Object</code>
    * [~setState(state, [trigger])](#module_index--module.exports..setState)
    * [~resetState()](#module_index--module.exports..resetState)

<a name="exp_module_index--module.exports"></a>
### module.exports(initialState) ⇒ <code>Mixin</code> ⏏
Initializes the mixin.

**Kind**: Exported function  
**Returns**: <code>Mixin</code> - - The mixin with the initial state closure  

| Param | Type | Description |
| --- | --- | --- |
| initialState | <code>Object</code> | The initial state for the store |

<a name="module_index--module.exports..getInitialState"></a>
#### module.exports~getInitialState() ⇒ <code>Object</code>
**Kind**: inner method of <code>[module.exports](#exp_module_index--module.exports)</code>  
**Returns**: <code>Object</code> - - The initial state passed into the constructor  
<a name="module_index--module.exports..setState"></a>
#### module.exports~setState(state, [trigger])
Set the state ala React by passing in only
part of the state object to update via merge.

**Kind**: inner method of <code>[module.exports](#exp_module_index--module.exports)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| state | <code>Object</code> |  | The state to merge with the current state |
| [trigger] | <code>Boolean</code> | <code>true</code> | Whether to trigger a state update (useful for testing) |

<a name="module_index--module.exports..resetState"></a>
#### module.exports~resetState()
Resets the state to the initial state passed in
by cloning it so as to prevent mutation.

**Kind**: inner method of <code>[module.exports](#exp_module_index--module.exports)</code>  
