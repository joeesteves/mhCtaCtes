import { store } from '../store'
import { loggedIn } from '../constants/actionTypes'

export const tryLogIn = (psw) => {
  switch (psw) {
    case "admin1122":
      store.dispatch({type: loggedIn.admin})
      break
    case "ventas2233":
      store.dispatch({type: loggedIn.seller})
      break
    default:
  }
}