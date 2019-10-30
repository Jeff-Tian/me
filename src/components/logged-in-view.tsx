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

export default class LoggedInView extends Taro.Component<LoggedInViewProps> {
    constructor(props) {
        super(props)
    }

    render() {
        return <View>
            <LoggedIn user={this.props.index.user} />
            <AtButton
                type="primary"
                onClick={this.props.logout}
                loading={this.props.index.loading}
            >
                Log Out
              </AtButton>
        </View>
    }
}