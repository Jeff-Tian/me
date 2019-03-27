import { LOGIN, LOGOUT, SET_USER } from '../constants/login'
import User from '../services/user'

const INITIAL_STATE = {
  loading: false,
  user: null,
}

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      User.login()
      return { ...state, loading: true }
    case LOGOUT:
      User.logout()
      return { ...state, loading: true }
    case SET_USER:
      return { ...state, user: action.user }
    default:
      return state
  }
}
