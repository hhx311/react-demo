/**
 * Created by Jason
 */
import React, {Component} from 'react';
import './LoginControl.scss';

const Button = ({onClick, title = 'Click', color = 'red'}) => (
    <button onClick={onClick} style={{color: `${color}`}}>
        {title}
    </button>
);

/*function LoginButton(props) {
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
 }*/

const User = () => {
    return <div>欢迎登陆...</div>
};

const Guest = () => {
    return <div>游客模式...</div>
};

const LoginContent = (props) => {
    const isLogin = props.isLogin;
    return isLogin ? <User/> : <Guest/>;
};

export default class LoginControl extends Component {
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
        const button = (
            isLogin ?
                <Button title="退出" color="red" onClick={this.handleLogoutClick}/>
                :
                <Button title="登录" color="blue" onClick={this.handleLoginClick}/>
        );

        return (
            <div className="LoginControl">
                {button}
                <LoginContent isLogin={isLogin}/>
            </div>
        );
    }
}