import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

export default function CardList() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    const tokenResult = Taro.getStorageSync('token')
    Taro.request({
      url: 'https://uniheart.pa-ca.me/citi-dev/cards',
      header: {
        Authorization: 'Bearer ' + tokenResult.token,
        accept: 'application/json'
      }
    }).then(response => {
      console.log('response = ', response)
    })
  }, [])

  return (
    <View>
      <Text>Hello</Text>
    </View>
  )
}
