import { filtersActions } from '../constants/actionTypes'

export const updateSearchTextFilter = (searchText) => ({
  type: filtersActions.updateSearchText,
  searchText
})
