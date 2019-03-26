import { LOGIN, LOGOUT } from "../constants/login";
import User from "../services/user";

const INITIAL_STATE = {
  loading: false
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      User.login();
      return { ...state, loading: true };
    case LOGOUT:
      User.logout();
      return { ...state, loading: true };
    default:
      return state;
  }
}
