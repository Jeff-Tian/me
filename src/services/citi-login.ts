import Taro from "@tarojs/taro";
import querystring from "querystring";
import { loggedIn, login, loginCancelled, setUser } from "../actions/login";

let popup: any = null;

function popupLogic() {
  try {
    // @ts-ignore
    // eslint-disable-next-line no-unused-vars
    const link = popup.location.href;
  } catch (ex) {
    popup.close();
    window.alert("之前打开的窗口已关闭, 请重新点击并在新打开的窗口中重试。");
  } finally {
    popup.postMessage(
      "https://uniheart.herokuapp.com/passport/citi?redirect_uri=" +
        encodeURIComponent(
          window.location.origin +
            process.env.publicPath +
            "pages/callback/citi"
        ),
      window.location.origin
    );
  }
}

export default dispatch => {
  dispatch(login());

  const interval = setInterval(() => {
    if (!popup) {
      clearInterval(interval);
      return;
    }

    if (popup.closed) {
      console.log("hello");
      dispatch(loginCancelled());
      clearInterval(interval);
    }
  }, 1000);

  if (!popup || popup.closed) {
    popup = window.open();
    popup.document.write(
      "<html><head><title>第三方登录 我的个人中心</title></head><body><p>正在加载中, 请稍等" +
        " ……</p><script>window.addEventListener('message', function (event) {\n" +
        "    console.log(event.data);\n" +
        "\n" +
        "    if (event.data.indexOf('http://') === 0 || event.data.indexOf('https://') === 0 || event.data.indexOf('//') === 0) {\n" +
        "        location.href = event.data;\n" +
        "    }\n" +
        "}, false);\n" +
        "\n" +
        "window.opener.postMessage('listenerLoaded', window.location.origin);</script></body></html>"
    );

    window.addEventListener(
      "message",
      async function(event) {
        console.log("event = ", event);
        if (event.origin !== window.location.origin) {
          return;
        }

        if (!event.data) {
          // Ignore the redirecting messages.
          return;
        }

        if (event.data === "listenerLoaded") {
          return popupLogic();
        }

        if (typeof event.data === "string" && event.data.indexOf("?") === 0) {
          var tokenResult = querystring.parse(event.data.substr(1));
          console.log(tokenResult);

          if (tokenResult.token) {
            dispatch(loggedIn(tokenResult.token));

            try {
              const userInfo = await Taro.request({
                url: "https://uniheart.pa-ca.me/jwt/user",
                header: {
                  Authorization: "Bearer " + tokenResult.token
                },
                method: "GET"
              });

              dispatch(setUser(userInfo.data));
            } catch (ex) {
              console.error(ex);
            }
          }

          return (popup || event.source).close();
        }
      },
      false
    );
  }

  popupLogic();
};
