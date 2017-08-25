import { store } from '../store'
import { loggedIn } from '../constants/actionTypes'

export const tryLogIn = (psw) => {
  console.log("trying")
  if(psw === "mh50"){
    console.log("HEY")
    store.dispatch({type: loggedIn.toggle})
  }
}