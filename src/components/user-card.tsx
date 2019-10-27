import Taro, { Component } from "@tarojs/taro";
import { AtList, AtListItem, AtCard } from "taro-ui";
import { User } from "msal";
import { ComponentClass } from "react";

interface UserCard {
  props: {
    user: User | null | any;
  };
  state: {
    profile: any
  }
}

class UserCard extends Component {
  constructor(props) {
    super(props);

    if (props.user.provider === 'citi') {
      this.state = {
        profile: JSON.parse(props.user.profile)
      }
    }
  }

  render(): any {
    return (this.props.user && this.props.user.idToken && this.props.user.idToken.emails) ?
      <AtList>
        {
          this.props.user.idToken.emails.map(email => (
            <AtListItem title={email} key={email} />
          ))
        }
      </AtList> :
      <div>
        <AtCard title={this.props.user.display_name} note={this.props.user.createdAt} thumb="https://sandbox.apihub.citi.com/gcb/authCode/resources/images/Citi-Enterprise-White.png" extra={this.state.profile.customerType}>
          {
            this.renderObject(this.state.profile)
          }
        </AtCard>
        <br />
      </div>
  }

  renderObject(o: any) {
    return <ul>
      {
        Object.keys(o).map(key => <li>
          <strong>{key}</strong>：
          {this.renderIt(o[key])}
        </li>
        )
      }
    </ul>
  }

  renderString(string: string) {
    return string
  }

  renderIt(o: any) {
    switch (typeof o) {
      case 'string':
        return this.renderString(o)
      case 'object':
        return this.renderObject(o)
      default:
        return 'unknown'
    }
  }
}

type PageOwnProps = {};

type PageState = {};

export default UserCard as ComponentClass<PageOwnProps, PageState>;
