import { LOGIN, LOGOUT, SET_USER, LOGGEDIN } from '../constants/login'

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

export const setUser = (user) => {
  return {
    type: SET_USER,
    user
  }
}

export const loggedIn = (token) => {
  return {
    type: LOGGEDIN,
    token
  }
}