import Taro, { useEffect, useState } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtCard } from "taro-ui";
import { pProp } from "../../helpers/display";

export default function ProductList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    Taro.request({
      url: "https://uniheart.pa-ca.me/citi-dev/onboarding/products",
      header: {
        accept: "application/json"
      }
    }).then(response => setList(response.data.products), console.error);
  }, []);

  return (
    <View>
      <View className="at-article_h2">花旗产品列表：</View>
      {list.map((product: any) => (
        <AtCard
          title={`${product.productCode}/${product.productType}`}
          extra={product.sourceCode}
          note={`${product.agreementStartDate} - ${product.agreementExpiryDate}`}
        >
          {pProp("productDescription")(product)}
          {pProp(`minimumCreditLimitAmount`)(product)}
          {pProp(`maximumCreditLimitAmount`)(product)}
          {pProp(`annualFeeAmount`)(product)}
          {pProp(`currencyCode`)(product)}
          {pProp(`interestRate`)(product)}
          {pProp(`latePaymentFee`)(product)}
        </AtCard>
      ))}
    </View>
  );
}
