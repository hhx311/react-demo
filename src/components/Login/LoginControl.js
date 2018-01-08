/**
 * Created by Jason
 */
import React, {Component} from 'react';
import './LoginControl.scss';

function LoginButton(props) {
    return (
        <button onClick={props.onClick} style={{color: "green"}}>
            login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick} style={{color: "red"}}>
            logout
        </button>
    );
}

function User(props) {
    return <div>欢迎登陆...</div>
}

function Guest(props) {
    return <div>游客模式...</div>
}

function LoginContent(props) {
    const isLogin = props.isLogin;
    return isLogin ? <User/> : <Guest/>;
}

class LoginControl extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isLogin: false
        };
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick() {
        this.setState({
            isLogin: true
        });
    }

    handleLogoutClick() {
        this.setState({
            isLogin: false
        });
    }

    render() {
        const isLogin = this.state.isLogin;
        let button = null;
        if (isLogin) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>;
        } else {
            button = <LoginButton onClick={this.handleLoginClick}/>;
        }

        return (
            <div className="LoginControl">
                {button}
                <LoginContent isLogin={isLogin}/>
            </div>
        );
    }
}
export default LoginControl;