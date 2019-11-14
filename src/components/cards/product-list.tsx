import Taro, { useState } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtCard } from "taro-ui";

export default function ProductList() {
  const [list, setList] = useState([]);

  return (
    <View>
      <View className="at-article_h2">花旗产品列表：</View>
      {list.map((p: any) => (
        <AtCard>{JSON.stringify(p)}</AtCard>
      ))}
    </View>
  );
}
