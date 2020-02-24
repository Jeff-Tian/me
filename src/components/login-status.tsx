import { connect } from '@tarojs/redux';
import { setLoading, setUser, setChecking } from '../actions/login';
import { ComponentClass } from "react";

type LoginStatusProps = {
    checking: boolean;
    startCheckingLoginStatus: () => any;
}

interface LoginStatus {
    props: LoginStatusProps
}

@connect((state, ownProps) => ({
    checking: state.login.checking
}), (dispatch) => ({ startCheckingLoginStatus: () => dispatch(setChecking(true)) }))
class LoginStatus extends Taro.Component {
    componentWillMount() {
        this.props.startCheckingLoginStatus();
    }
    render() {
        return !this.props.checking ? <p>未登录</p> : <p>查询登录状态中……</p>;
    }
}

export default LoginStatus as ComponentClass;