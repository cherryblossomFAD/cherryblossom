var actions = exports = module.exports

exports.REMOVE_ITEM = 'REMOVE_ITEM'

exports.removeItem = function removeItem(id) {
  return {
    type: actions.REMOVE_ITEM,
    id: id
  }
}
