import { connect } from '@tarojs/redux';
import { setLoading, setUser, setChecking } from '../../actions/login';
import { ComponentClass } from "react";
import { UniUser } from 'uni-user';
import LoginButton from './login-button';

type LoginStatusProps = {
    checking: boolean;
    startCheckingLoginStatus: () => any;
    endCheckingLoginStatus: () => any;
    hasLoggedIn: boolean;
    setUserInfo: () => any;
}

interface LoginStatus {
    props: LoginStatusProps
}

@connect((state, ownProps) => ({
    checking: state.login.checking,
    hasLoggedIn: state.login.user !== null
}), (dispatch) => ({ startCheckingLoginStatus: () => dispatch(setChecking(true)), setUserInfo: (user) => dispatch(setUser(user)), endCheckingLoginStatus: () => dispatch(setChecking(false)) }))
class LoginStatus extends Taro.Component {
    componentWillMount() {
        this.props.startCheckingLoginStatus();
    }
    componentDidMount() {
        const { setUserInfo, endCheckingLoginStatus } = this.props;

        UniUser.getInfo()
            .then(setUserInfo)
            .catch(console.error)
            .finally(endCheckingLoginStatus)
    }
    render() {
        const { checking, hasLoggedIn } = this.props;

        return !checking ? (hasLoggedIn ? <div>已登录</div> : <LoginButton returnUrl="" />) : <p>查询 Uni 登录状态中……</p>;
    }
}

export default LoginStatus as ComponentClass;