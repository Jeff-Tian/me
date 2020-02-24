import { connect } from '@tarojs/redux';
import { setLoading, setUser, setChecking } from '../../actions/login';
import { ComponentClass } from "react";
import { LoginViaPopup } from 'uni-user';
import { AtButton } from 'taro-ui';

type LoginButtonOwnProps = {
    returnUrl: string;
}

type LoginButtonProps = {
    loading: boolean; startLogin: () => any; dispatch: any;
} & LoginButtonOwnProps;

interface LoginButton {
    props: LoginButtonProps
}

const w = window.parent || window;

@connect((state, ownProps) => {
    return {
        loading: state.login.loading
    }
}, (dispatch, ownProps) => {
    return {
        dispatch,
        startLogin: () => dispatch(setLoading(true))
    }
})
class LoginButton extends Taro.Component {
    componentWillMount() {
    }
    componentDidMount() {
    }
    render() {
        const { loading, startLogin, returnUrl, dispatch } = this.props;

        const ssoUrl = `https://sso.pa-ca.me/app/login?r=${encodeURIComponent(returnUrl || w.location.href)}`

        const gotoLoginPage = (evt) => {
            startLogin()

            evt.preventDefault();
            LoginViaPopup(w, ssoUrl)(dispatch);
        }

        return <AtButton onClick={gotoLoginPage} type="primary" loading={loading}>Uni 登录</AtButton>
    }
}

export default LoginButton as ComponentClass<LoginButtonOwnProps>;