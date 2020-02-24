import {
  LOGIN,
  LOGOUT,
  SET_USER,
  LOGGEDIN,
  LOGGIN_CANCELLED,
  SET_LOADING,
  SET_CHECKING
} from "../constants/login";

const INITIAL_STATE = {
  loading: false,
  user: null,
  checking: true
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, loading: true };
    case LOGOUT:
      return { ...state, loading: true };
    case SET_USER:
      return { ...state, user: action.user, loading: false };
    case LOGGEDIN:
      return { ...state, loading: false };
    case LOGGIN_CANCELLED:
      return { ...state, loading: false };
    case SET_LOADING:
      return { ...state, loading: action.loading }
    case SET_CHECKING:
      return { ...state, checking: action.checking }
    default:
      return state;
  }
}
