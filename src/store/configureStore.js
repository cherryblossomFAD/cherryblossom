const { createStore } = require('redux')
const reducer = require('../reducers')

module.exports = function configureStore(initialState) {
  const store = (createStore)(reducer, initialState)

  return store
}
