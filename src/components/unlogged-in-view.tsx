import Taro, { useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton, AtDivider, AtInput, AtCurtain } from 'taro-ui'
import './unlogged-in-view.styl'

type UnLoggedInViewProps = {
  login: () => void,
  index: { loading: boolean },
  citiLogin: () => void,
  tokenLogin: (token: string) => void
}

export default function UnLoggedInView(props: UnLoggedInViewProps) {
  const [askingForToken, setAskForToken] = useState(false)
  const [token, setToken] = useState('')

  const showTokenModal = () => setAskForToken(true)
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

      <AtCurtain isOpened={askingForToken} onClose={hideTokenModal} closeBtnPosition="top-right">
        <AtInput
          name='token'
          title='请输入令牌'
          type='text'
          placeholder='令牌'
          value={token}
          onChange={t => { setToken(String(t)) }}
        />
        <AtDivider />
        <AtButton type="primary" onClick={() => {
          props.tokenLogin(token)
          hideTokenModal()
        }}>登录</AtButton>
      </AtCurtain>
    </View>
  )
}
