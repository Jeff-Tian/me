import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtButton } from "taro-ui";

type UnLoggedInViewProps = {
    login: () => void,
    index: { loading: boolean },
    citiLogin: () => void
}

export default class UnLoggedInView extends Taro.Component<UnLoggedInViewProps> {
    render() {
        return <View className="container-main">
            <AtButton
                type="primary"
                onClick={this.props.login}
                loading={this.props.index.loading}
            >
                {Taro.getEnv() === Taro.ENV_TYPE.WEB ? '微软 AD 账号' : ''}
                {Taro.getEnv() === Taro.ENV_TYPE.WEAPP && '微信授权登录'}
            </AtButton>
            <br />
            {Taro.getEnv() === Taro.ENV_TYPE.WEB ? (
                <AtButton
                    onClick={this.props.citiLogin.bind(this)}
                    loading={this.props.index.loading}
                >
                    花旗账号登录
                </AtButton>
            ) : null}
        </View>
    }
}