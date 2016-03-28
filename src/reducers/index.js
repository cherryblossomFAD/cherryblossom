const { combineReducers } = require('redux')
const items = require('./destinationReducer')

const rootReducer = combineReducers({
  items
})

module.exports = rootReducer
