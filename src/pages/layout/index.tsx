import Taro, {useState} from '@tarojs/taro'
import {View} from '@tarojs/components'
import {AtNavBar} from 'taro-ui'
import Drawer from './drawer'

export default function HardwayLayout(props) {
  const [drawerShow, setDrawerShow] = useState(false)

  const onOpenDrawer = () => setDrawerShow(true)
  const onCloseDrawer = () => setDrawerShow(false)

  return (
    <View className='index'>
      <AtNavBar
        onClickRgIconSt={onOpenDrawer}
        onClickRgIconNd={() => {
        }}
        onClickLeftIcon={() => {
        }}
        color='#000'
        title='我的个人中心'
        leftText='返回'
        leftIconType='chevron-left'
        rightFirstIconType='bullet-list'
        rightSecondIconType='user'
      />
      <View className='container'>{props.children}</View>
      <Drawer
        show={drawerShow}
        onClose={onCloseDrawer}
      />
    </View>
  )
}
