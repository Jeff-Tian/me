import { ComponentClass } from "react";
import Taro, { Component, Config } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { connect } from "@tarojs/redux";

type PageStateProps = {};

type PageDispatchProps = {};

type PageOwnProps = {};

type PageState = {};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

interface Index {
  props: IProps;
}

@connect(
  ({}) => ({}),
  () => ({})
)
class Index extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: "登录回调"
  };

  componentWillReceiveProps(nextProps) {
    console.log("hello");
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    console.log("fuck");
    return (
      <View>
        <View>
          <Text>欢迎！</Text>
        </View>
      </View>
    );
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>;
