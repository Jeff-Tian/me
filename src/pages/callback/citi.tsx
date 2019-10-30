import { ComponentClass } from "react";
import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { AtNavBar } from "taro-ui";
import "taro-ui/dist/style/index.scss"; // 引入组件样式 - 方式一
import querystring from "querystring";
import { login, setUser, loggedIn } from "../../actions/login";

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

type PageDispatchProps = {
  login: () => void;
  logout: () => void;
  setUser: (user) => void;
  citiLogin: () => void;
};

type IProps = PageDispatchProps;

interface Citi {
  props: IProps;
}


@connect(
  ({ }) => ({}),
  (dispatch) => ({
    login() {
      dispatch(login());
    },
    setUser(user) {
      dispatch(setUser(user));
    },
    citiLogin() {
      var tokenResult = querystring.parse(window.location.search.substr(1));
      console.log(tokenResult);

      if (tokenResult.token) {
        dispatch(loggedIn(tokenResult.token))
        Taro.setStorageSync('token', tokenResult);

        Taro.request({
          url: 'https://uniheart.pa-ca.me/jwt/user',
          header: {
            'Authorization': 'Bearer ' + tokenResult.token
          },
          method: 'GET',
        }).then(userInfo => {
          dispatch(setUser(userInfo.data)); Taro.setStorageSync('userInfo', userInfo.data);
        }, console.error).then(() => {
          Taro.navigateTo({
            url: "/"
          })
        })
      }
    }
  })
)
class Citi extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: "我的个人中心"
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() { }

  componentDidShow() {
    if (window.opener) {
      window.opener.postMessage(window.location.search, window.location.origin);
    }

    this.props.citiLogin()
  }

  componentDidHide() { }

  handleClick() {
    console.log(arguments);
  }

  async handleLeftClick() {
    await Taro.navigateTo({
      url: "/"
    });
  }

  render() {
    return (
      <View className="index">
        <AtNavBar
          onClickRgIconSt={this.handleClick}
          onClickRgIconNd={this.handleClick}
          onClickLeftIcon={this.handleLeftClick}
          color="#000"
          title="我的个人中心"
          leftText="返回"
          leftIconType="chevron-left"
          rightFirstIconType="bullet-list"
          rightSecondIconType="user"
        />
        <View className="container">
          <p>登录成功，窗口即将关闭……</p>
        </View>
      </View>
    );
  }
}

// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

export default Citi as ComponentClass;
