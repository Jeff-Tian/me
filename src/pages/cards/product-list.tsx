import "taro-ui/dist/style/index.scss"; // 引入组件样式 - 方式一
import Taro from "@tarojs/taro";
import ProductList from "../../components/cards/product-list";
import HardwayLayout from "../layout";

export default class ProductListPage extends Taro.Component {
  config = {
    navigationBarTitleText: "花旗产品列表"
  };

  render() {
    return (
      <HardwayLayout>
        <ProductList />
      </HardwayLayout>
    );
  }
}
