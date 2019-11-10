import Taro, { useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton, AtDivider, AtModal } from 'taro-ui'

type UnLoggedInViewProps = {
  login: () => void,
  index: { loading: boolean },
  citiLogin: () => void,
  tokenLogin: () => void
}

export default function UnLoggedInView(props: UnLoggedInViewProps) {
  const [askingForToken, setAskForToken] = useState(false)

  const showTokenModal = () => {
    setAskForToken(true)
    // props.tokenLogin()
  }
  const hideTokenModal = () => setAskForToken(false)

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

      <AtDivider />
      <AtButton onClick={showTokenModal} loading={props.index.loading}>令牌登录</AtButton>

      <AtModal isOpened={askingForToken} title="令牌登录" cancelText="取消" confirmText="确认" content="请输入令牌" onClose={hideTokenModal} onCancel={hideTokenModal} onConfirm={hideTokenModal} />
    </View>
  )
}
