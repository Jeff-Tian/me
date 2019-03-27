import { LOGIN, LOGOUT, SET_USER } from '../constants/login'

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

export const setUser = (user)=>{
  return {
    type: SET_USER,
    user
  }
}
