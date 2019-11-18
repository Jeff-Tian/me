import Taro, { useState, useEffect } from "@tarojs/taro";
import { Button, View } from "@tarojs/components";
import {
  AtCard,
  AtModal,
  AtModalAction,
  AtModalContent,
  AtModalHeader
} from "taro-ui";
import { connect } from "@tarojs/redux";
import citilogin from "../../services/citi-login";

function CardList({ dispatch }) {
  const [cards, setCards] = useState([]);
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    const tokenResult = Taro.getStorageSync("token");
    Taro.showLoading({ title: "加载中……" }).then();
    Taro.request({
      url: "https://uniheart.pa-ca.me/citi-dev/cards",
      header: {
        Authorization: "Bearer " + tokenResult.token,
        accept: "application/json"
      }
    })
      .then(
        response => setCards(response.data.cardDetails),
        error => {
          console.error("错误：", error);

          if (
            error.message === "Failed to fetch" ||
            error.statusText === "Unauthorized"
          ) {
            try {
              citilogin(dispatch);
            } catch (ex) {
              console.error(ex);
              setShowAuthModal(true);
            }
          }
        }
      )
      .finally(Taro.hideLoading);
  }, []);

  return (
    <View>
      <View className="at-article__h2">我的卡片：</View>
      {cards.map((c: any) => (
        <AtCard
          title={c.displayCardNumber}
          note={c.localCardActivationIndicator}
          extra={c.subCardType}
        >
          {c.currentCreditLimitAmount}
        </AtCard>
      ))}

      <AtModal isOpened={showAuthModal}>
        <AtModalHeader>请授权</AtModalHeader>
        <AtModalContent>
          您还没有授权，或者之前的授权已过期，需要重新授权。
        </AtModalContent>
        <AtModalAction>
          <Button onClick={() => setShowAuthModal(false)}>取消</Button>
          <Button
            onClick={() => {
              setShowAuthModal(true);
              citilogin(dispatch);
            }}
          >
            确定
          </Button>
        </AtModalAction>
      </AtModal>
    </View>
  );
}

export default connect(() => ({}))(CardList);
