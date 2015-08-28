# set-state-mixin 

![](https://img.shields.io/travis/danawoodman/set-state-mixin.svg)
![](https://img.shields.io/npm/v/set-state-mixin.svg)
[![Dependency Status](https://www.versioneye.com/user/projects/55de3dca2383e900170000b6/badge.svg?style=flat)](https://www.versioneye.com/user/projects/55de3dca2383e900170000b6)
![](https://img.shields.io/npm/dm/set-state-mixin.svg)

> `setState` like behavior for [Reflux][reflux] stores.


## Install

```
npm install --save set-state-mixin
```


## Usage

```js
var reflux = require('reflux')
var setStateMixin = require('set-state-mixin')

var INITIAL_STATE = {
  loading: false,
  people: [],
}

var PeopleStore = Reflux.createStore({
  mixins: {
    setStateMixin(INITIAL_STATE)
  },

  onCreate: function (person) {
    this.setState({
      loading: true,
    })

    request.post('/people', person)
      .then(function (newPerson) {
        // Add the new person to the list of people.
        this.state.people.push(newPerson)

        // Indicate loading is finished and trigger an
        // update of the store with the new person.
        this.setState({
          loading: false,
          people: this.state.people,
        })
      }.bind(this))
      .catch(function (err) {
        // Do some sort of error handling...
        this.setState({
          loading: false,
        })
      }.bind(this))
  }
})
```


## API

See [the API docs](api.md) for full documentation.


## License

[MIT](license) &copy; [Dana Woodman][dana]


[reflux]: https://github.com/reflux/refluxjs
[dana]: http://danawoodman.com
