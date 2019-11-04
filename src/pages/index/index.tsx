import {View} from '@tarojs/components'
import {connect} from '@tarojs/redux'
import Taro, {Component, Config} from '@tarojs/taro'
import querystring from 'querystring'
import {ComponentClass} from 'react'
import UnLoggedInView from '../../components/unlogged-in-view'
import {AtNavBar} from 'taro-ui'
import 'taro-ui/dist/style/index.scss' // 引入组件样式 - 方式一
import {loggedIn, login, logout, setUser} from '../../actions/login'
import LoggedInView from '../../components/logged-in-view'
import User from '../../services/user'
import './index.styl'

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

type PageStateProps = {
  index: {loading: false; user: null}
}

type PageDispatchProps = {
  login: () => void;
  logout: () => void;
  setUser: (user) => void;
  citiLogin: () => void;
}

type PageOwnProps = {}

type PageState = {
  popup: any
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps
}

let popup: any = null

function popupLogic() {
  try {
    // @ts-ignore
    const link = popup.location.href
  } catch (ex) {
    popup.close()
    window.alert('之前打开的窗口已关闭, 请重新点击并在新打开的窗口中重试。')
  } finally {
    popup.postMessage(
      'https://uniheart.herokuapp.com/passport/citi?redirect_uri=' +
        encodeURIComponent(
          location.origin + process.env.publicPath + 'pages/callback/citi'
        ),
      window.location.origin
    )
  }
}

@connect(
  ({index}) => ({
    index,
  }),
  dispatch => ({
    login() {
      dispatch(login())
      User.login().then(user => dispatch(setUser(user)))
    },
    logout() {
      dispatch(logout())
      Taro.setStorageSync('userInfo', null)
      User.logout()
      dispatch(setUser(null))
    },
    setUser(user) {
      dispatch(setUser(user))
    },
    citiLogin() {
      dispatch(login())

      const interval = setInterval(() => {
        if (popup.closed) {
          console.log('hello')
          clearInterval(interval)
        }
      }, 1000)

      if (!popup || popup.closed) {
        popup = window.open()
        popup.document.write(
          '<html><head><title>第三方登录 我的个人中心</title></head><body><p>正在加载中, 请稍等' +
            " ……</p><script>window.addEventListener('message', function (event) {\n" +
            '    console.log(event.data);\n' +
            '\n' +
            "    if (event.data.indexOf('http://') === 0 || event.data.indexOf('https://') === 0 || event.data.indexOf('//') === 0) {\n" +
            '        location.href = event.data;\n' +
            '    }\n' +
            '}, false);\n' +
            '\n' +
            "window.opener.postMessage('listenerLoaded', window.location.origin);</script></body></html>"
        )

        window.addEventListener(
          'message',
          async function(event) {
            console.log('event = ', event)
            if (event.origin !== window.location.origin) {
              return
            }

            if (!event.data) {
              // Ignore the redirecting messages.
              return
            }

            if (event.data === 'listenerLoaded') {
              return popupLogic()
            }

            if (
              typeof event.data === 'string' &&
              event.data.indexOf('?') === 0
            ) {
              var tokenResult = querystring.parse(event.data.substr(1))
              console.log(tokenResult)

              if (tokenResult.token) {
                dispatch(loggedIn(tokenResult.token))

                try {
                  const userInfo = await Taro.request({
                    url: 'https://uniheart.pa-ca.me/jwt/user',
                    header: {
                      Authorization: 'Bearer ' + tokenResult.token,
                    },
                    method: 'GET',
                  })

                  dispatch(setUser(userInfo.data))
                } catch (ex) {
                  console.error(ex)
                }
              }

              return (popup || event.source).close()
            }
          },
          false
        )
      }

      popupLogic()
    },
  })
)
class Index extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '我的个人中心',
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  state: PageState = {popup: null}

  componentWillUnmount() {}

  componentDidShow() {
    this.props.setUser(User.get() || Taro.getStorageSync('userInfo'))
  }

  componentDidHide() {}

  handleClick() {
    console.log(arguments)
  }

  render() {
    return (
      <View className="index">
        <AtNavBar
          onClickRgIconSt={this.handleClick}
          onClickRgIconNd={this.handleClick}
          onClickLeftIcon={this.handleClick}
          color="#000"
          title="我的个人中心"
          leftText="返回"
          leftIconType="chevron-left"
          rightFirstIconType="bullet-list"
          rightSecondIconType="user"
        />
        <View className="container">
          {!this.props.index.user ? (
            <UnLoggedInView {...this.props} />
          ) : (
            <LoggedInView {...this.props} />
          )}
        </View>
      </View>
    )
  }
}

// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

export default Index as ComponentClass<PageOwnProps, PageState>
