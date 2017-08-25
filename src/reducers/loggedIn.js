import { loggedIn } from '../constants/actionTypes'

export default (state = true, action) => {
  switch (action.type) {
    case loggedIn.toggle:
      return !state
    default:
      return state
  }
}