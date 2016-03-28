const {
  REMOVE_ITEM,
} = require('../actions/destinationActions')

const initialState = {
  destinationList: []
}

module.exports = function destinationReducer(state = initialState, action) {
  let list

  case REMOVE_ITEM:
    list = state.destinationList.slice(0)
    const index = list.map(i => i.id).indexOf(action.id)
    list.splice(index, 1)

    return {
      ...state,
      destinationList: list
    }

  default:
    return state
  }
}
