import {ADD, LOGIN, LOGOUT, MINUS} from '../constants/counter'
import User from "../services/user";


const INITIAL_STATE = {
  num: 0
}

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 1
      }
    case MINUS:
      return {
        ...state,
        num: state.num - 1
      }
    case LOGIN:
      User.login()
      return state;
    case LOGOUT:
      User.logout();
      return state;
    default:
      return state
  }
}
