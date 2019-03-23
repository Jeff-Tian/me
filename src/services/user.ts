import {UserAgentApplication} from "msal";

const applicationConfig = {
  clientID: 'bacb8d3b-6ee0-4443-9bea-b54485a5a20d',
  authority: 'https://login.microsoftonline.com/tfp/unihearti.onmicrosoft.com/B2C_1_tictactoe',
  b2cScopes: ["https://unihearti.onmicrosoft.com/hello/demo.read"],
}

const userAgentApp = new UserAgentApplication(applicationConfig.clientID, applicationConfig.authority, (errorDesc, token, error, tokenType) => {
  console.log(errorDesc, token, error, tokenType)
});

export default class User {
  static getAgent() {
    return userAgentApp;
  }

  static get() {
    return userAgentApp.getUser();
  }

  static login() {
    userAgentApp.loginRedirect(applicationConfig.b2cScopes)
  }

  static logout() {
    userAgentApp.logout()
  }
}
