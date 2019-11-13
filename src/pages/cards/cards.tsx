import 'taro-ui/dist/style/index.scss' // 引入组件样式 - 方式一
import Taro, {Component} from '@tarojs/taro'
import CardList from '../../components/cards'
import HardwayLayout from '../layout'

export default class Cards extends Component {
  config = {
    navigationBarTitleText: '卡片信息',
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <HardwayLayout>
        <CardList />
      </HardwayLayout>
    )
  }
}
