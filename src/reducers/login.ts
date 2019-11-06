import {
  LOGIN,
  LOGOUT,
  SET_USER,
  LOGGEDIN,
  LOGGIN_CANCELLED,
} from '../constants/login'

const INITIAL_STATE = {
  loading: false,
  user: null,
}

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return {...state, loading: true}
    case LOGOUT:
      return {...state, loading: true}
    case SET_USER:
      return {...state, user: action.user, loading: false}
    case LOGGEDIN:
      return {...state, loading: false}
    case LOGGIN_CANCELLED:
      return {...state, loading: false}
    default:
      return state
  }
}
