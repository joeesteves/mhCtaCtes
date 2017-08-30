import { loggedIn } from '../constants/actionTypes'

export default (state = false, action) => {
  switch (action.type) {
    case loggedIn.toggle:
      return !state
    default:
      return state
  }
}