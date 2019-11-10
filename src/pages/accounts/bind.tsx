import 'taro-ui/dist/style/index.scss' // 引入组件样式 - 方式一
import BindOtherSocialAccounts from "../../components/bind";
import { Component } from "@tarojs/taro";
import HardwayLayout from '../layout';

export default class Bind extends Component {
    config = {
        navigationBarTitleText: '绑定其他账号',
    }

    render() {
        return <HardwayLayout><BindOtherSocialAccounts /></HardwayLayout>
    }
}