import { filtersActions } from '../constants/actionTypes'

export default (state = [{name:'searchText', value:''}], action) => {
  switch (action.type) {
    case filtersActions.updateSearchText:
      return update(state, 'searchText', action.searchText)
    case filtersActions.cleanFilter:
      return [{name:'searchText', value:''}]
    default:
      return state
  }
}
const update = (state, name, value) => {
  console.log("cacaca")
 return  state.map(filter => filter.name === name ? {...filter, value: safeText(value)}: filter)
}

const safeText = (text) => (
  text.replace(/([\(,\)])/g,'\\$1')
)