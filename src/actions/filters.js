import { filtersActions } from '../constants/actionTypes'
import { store } from '../store'

export const updateSearchTextFilter = (searchText) => ({
  type: filtersActions.updateSearchText,
  searchText
})

export const cleanFilter = () => {
  store.dispatch({type: filtersActions.cleanFilter})
}