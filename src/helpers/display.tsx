import Taro, { View } from "@tarojs/components";
import { compose } from "ramda";
import { pp } from "./display-ts";

export const p = (s: string) => <View className="at-article_p">{s}</View>;

export const pProp = (s: string) =>
  compose(
    p,
    pp(s)
  );
