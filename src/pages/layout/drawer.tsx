import { AtDrawer } from "taro-ui";
import Taro from "@tarojs/taro";

const map = new Map<string, string>([
  ["账号信息", "/"],
  ["账号绑定", "/pages/accounts/bind"],
  ["卡片信息", "/pages/cards/cards"],
  ["产品列表", "/pages/cards/product-list"]
]);

export default function Drawer(props) {
  const onItemClick = async (index: number) => {
    await Taro.navigateTo({ url: [...map.values()][index] });
  };

  return (
    <AtDrawer
      show={props.show}
      right
      mask
      onClose={props.onClose}
      items={[...map.keys()]}
      onItemClick={onItemClick}
    />
  );
}
