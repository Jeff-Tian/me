import {
  LOGIN,
  LOGOUT,
  SET_USER,
  LOGGEDIN,
  LOGGIN_CANCELLED,
  SET_LOADING,
  SET_CHECKING
} from "../constants/login";

export const login = () => {
  return {
    type: LOGIN
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};

export const setUser = user => {
  return {
    type: SET_USER,
    user
  };
};

export const loggedIn = token => {
  return {
    type: LOGGEDIN,
    token
  };
};

export const loginCancelled = () => {
  return {
    type: LOGGIN_CANCELLED
  };
};

export const setLoading = (loading: boolean) => {
  return {
    type: SET_LOADING,
    loading
  }
}

export const setChecking = (checking: boolean) => ({
  type: SET_CHECKING,
  checking
})