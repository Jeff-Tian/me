import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import UserCard from "./user-card";
import { ComponentClass } from "react";
import { User } from "msal";

class LoggedIn extends Component {
  render() {
    return (
      <View>
        <UserCard user={this.props.user} />
      </View>
    );
  }
}

type PageOwnProps = {
  user: User | null;
};

type PageState = {};

export default LoggedIn as ComponentClass<PageOwnProps, PageState>;
