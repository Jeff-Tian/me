import {UserAgentApplication} from "msal";
import {ADD, LOGIN, MINUS} from '../constants/counter'


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
      login()
      return state;
    default:
      return state
  }
}


function login() {
  const applicationConfig = {
    clientID: 'bacb8d3b-6ee0-4443-9bea-b54485a5a20d',
    authority: 'https://login.microsoftonline.com/tfp/unihearti.onmicrosoft.com/B2C_1_tictactoe',
    b2cScopes: ["https://unihearti.onmicrosoft.com/hello/demo.read"],
  }

  const userAgentApp = new UserAgentApplication(applicationConfig.clientID, applicationConfig.authority, (errorDesc, token, error, tokenType) => {
  });

  if (userAgentApp.getUser() && !userAgentApp.isCallback(window.location.hash)) {
    alert('logged in!')
  } else {
    console.log('unlogged in')

    userAgentApp.loginRedirect(applicationConfig.b2cScopes)
  }
}
