import Taro from '@tarojs/taro'
import {View} from '@tarojs/components'
import {AtButton, AtDivider} from 'taro-ui'

type UnLoggedInViewProps = {
  login: () => void,
  index: {loading: boolean},
  citiLogin: () => void
}

export default function UnLoggedInView(props: UnLoggedInViewProps) {
  return (
    <View className='container-main'>
      <AtButton
        type='primary'
        onClick={props.login}
        loading={props.index.loading}
      >
        {Taro.getEnv() === Taro.ENV_TYPE.WEB ? '微软 AD 账号' : ''}
        {Taro.getEnv() === Taro.ENV_TYPE.WEAPP && '微信授权登录'}
      </AtButton>

      <AtDivider />

      {Taro.getEnv() === Taro.ENV_TYPE.WEB ? (
        <AtButton
          onClick={props.citiLogin.bind(this)}
          loading={props.index.loading}
        >
          花旗账号登录
        </AtButton>
      ) : null}
    </View>
  )
}
