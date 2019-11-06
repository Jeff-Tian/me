import Taro from '@tarojs/taro'
import UserCard from './user-card'

type LoggedInProps = {
  user?: any
}

export default function LoggedInCard(props: LoggedInProps) {
  return <UserCard user={props.user} />
}
