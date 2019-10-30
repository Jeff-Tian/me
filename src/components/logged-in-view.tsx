import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { AtButton } from "taro-ui";
import LoggedIn from './logged-in'

type LoggedInViewProps = {
    index: {
        user?: any,
        loading: boolean
    },

    logout: () => void
}

type LoggedInViewState = {
    issueInProgress: boolean
}

export default class LoggedInView extends Taro.Component<LoggedInViewProps, LoggedInViewState> {
    constructor(props) {
        super(props)
    }

    async issueToken() {
        const result = Taro.getStorageSync('token');

        if (!result) {
            Taro.showToast({ title: '操作失败，请重新登录后再试。', icon: 'none', duration: 3000 })
            return
        }

        const link = location.origin + '/pages/callback/citi?token=' + result.token + '&traceId=' + result.traceId

        console.log('link = ', link)
        try {
            await Taro.setClipboardData({
                data: link,
            })

            Taro.showToast({
                title: link,
                icon: 'success',
                duration: 2000
            })
        } catch (ex) {
            console.error(ex)

            Taro.showToast({
                title: link,
                icon: 'none',
                duration: 6000
            })
        }

    }

    render() {
        return <View>
            <LoggedIn user={this.props.index.user} />
            <AtButton type="primary" onClick={this.issueToken.bind(this)} loading={this.state.issueInProgress}>颁发令牌</AtButton>
            <br />
            <AtButton
                type="primary"
                onClick={this.props.logout}
                loading={this.props.index.loading}
            >
                退出登录
              </AtButton>
        </View>
    }
}