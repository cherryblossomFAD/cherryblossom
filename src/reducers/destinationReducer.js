const {
  REMOVE_ITEM,
} = require('../actions/destinationActions')

const initialState = {
  destinationItems: []
}

module.exports = function destinationReducer(state = initialState, action) {
  let list
  switch (action.type) {
  case REMOVE_ITEM:
    list = state.destinationItems.slice(0)
    const index = list.map(i => i.id).indexOf(action.id)
    list.splice(index, 1)

    return {
      ...state,
      destinationItems: list
    }

  default:
    return state
  }
}
