import { balanceActions } from '../constants/actionTypes'

export default (state = [], action) => {
  switch (action.type) {
    case balanceActions.build:
      return action.balance
    default:
      return state
  }
}