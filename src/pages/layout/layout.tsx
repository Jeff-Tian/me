import Taro from '@tarojs/taro'
import {AtTabBar} from 'taro-ui'

export default class Layout extends Taro.Component<any, any> {
  constructor() {
    super(...arguments)

    this.state = {current: 0}
  }

  handleClick(value) {
    this.setState({
      current: value,
    })
  }

  render() {
    return (
      <AtTabBar
        tabList={[{title: '拍照'}, {title: '通讯录', dot: true}]}
        onClick={this.handleClick.bind(this)}
        current={this.state.current}
      />
    )
  }
}
