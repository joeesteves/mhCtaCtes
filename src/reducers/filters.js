import { filtersActions } from '../constants/actionTypes'

export default (state = [{name:'searchText', value:''}], action) => {
  switch (action.type) {
    case filtersActions.updateSearchText:
      return update(state, 'searchText', action.searchText)
    default:
      return state
  }
}
const update = (state, name, value) => (
  state.map(filter => filter.name === name ? {...filter, value}: filter)
)