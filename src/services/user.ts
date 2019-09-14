import { UserAgentApplication } from "msal";
import Taro from "@tarojs/taro";
import { setUser } from "../actions/login";
import Store from '../store/test'

let userAgentApp: any;
let applicationConfig: any;
if (process.env.TARO_ENV === "h5") {
  applicationConfig = {
    clientID: "bacb8d3b-6ee0-4443-9bea-b54485a5a20d",
    authority:
      "https://login.microsoftonline.com/tfp/unihearti.onmicrosoft.com/B2C_1_tictactoe",
    b2cScopes: ["https://unihearti.onmicrosoft.com/hello/demo.read"]
  };

  userAgentApp = new UserAgentApplication(
    applicationConfig.clientID,
    applicationConfig.authority,
    (errorDesc, token, error, tokenType) => {
      console.log(errorDesc, token, error, tokenType);
    }
  );
} else {
  applicationConfig = {
    b2cScopes: []
  };

  const store = Store()

  userAgentApp = {
    getUser: function () {
      return Taro.getStorageSync('userInfo');
    },

    logout: () => {
      Taro.setStorageSync('userInfo', null);
      store.dispatch(setUser(null));
    },

    loginRedirect: function () {
      Taro.login({
        timeout: 3000
      })
        .then(async res => {
          const response = await Taro.request({
            url: `https://uniheart.pa-ca.me/passport/weapp/callback?code=${res.code}`
          });

          let wechatInfo = JSON.stringify(response.data);
          // await Taro.showToast({
          //   title: "用户数据：" + wechatInfo,
          //   duration: 25000,
          //   icon: "none"
          // });
          store.dispatch(setUser(wechatInfo))

          Taro.setStorageSync('userInfo', wechatInfo)
          return wechatInfo;
        })
        .catch(async error => {
          console.error(error);

          await Taro.showToast({
            title: "login 失败：" + JSON.stringify(error)
          });
        });
    }
  };
}

export default class User {
  static getAgent() {
    return userAgentApp;
  }

  static get() {
    return userAgentApp.getUser();
  }

  static login() {
    return userAgentApp.loginRedirect(applicationConfig.b2cScopes);
  }

  static logout() {
    userAgentApp.logout();
  }
}
