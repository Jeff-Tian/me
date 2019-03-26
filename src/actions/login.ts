import {LOGIN, LOGOUT} from '../constants/login'

export const login = () => {
  return {
    type: LOGIN
  }
}

export const logout = () => {
  return {
    type: LOGOUT
  }
}
