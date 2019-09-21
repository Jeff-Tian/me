import Taro, { Component } from "@tarojs/taro";
import { AtList, AtListItem } from "taro-ui";
import { User } from "msal";
import { ComponentClass } from "react";

interface UserCard {
  props: {
    user: User | null | any;
  };
}

class UserCard extends Component {
  constructor(props) {
    super(props);
  }

  render(): any {
    return (
      <AtList>
        {this.props.user && this.props.user.idToken && this.props.user.idToken.emails ?
          this.props.user.idToken.emails.map(email => (
            <AtListItem title={email} key={email} />
          )) : <AtListItem title={this.props.user.display_name} />}
      </AtList>
    );
  }
}

type PageOwnProps = {};

type PageState = {};

export default UserCard as ComponentClass<PageOwnProps, PageState>;
