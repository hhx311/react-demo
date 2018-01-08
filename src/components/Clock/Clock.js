/**
 * Created by Jason
 * 时钟(组件)
 */
import React, {Component} from 'react';

const style = {
    textAlign: 'left',
    marginLeft: '15px',
    color: 'deeppink',
    fontSize: '20px'
};

class Clock extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            date: null
        };
    }

    // 组件加载
    componentDidMount() {
        this.itv = setInterval(
            () => {
                this.setState({
                    date: new Date()
                });
            },
            1000
        );

        console.log('已加载');
    }

    // 组件卸载
    componentWillUnMount() {
        clearInterval(this.itv); // 清除定时
        console.log('即将卸载');
    }

    componentDidUnMount() {
        console.log('卸载了');
    }

    render() {
        const date = this.state.date;
        return (
            <div className="Clock">
                <h2 className="time-content" style={style}>
                    <input type="text"/>
                    日期: {date ? date.toLocaleTimeString() : date}
                </h2>
            </div>
        );
    }
}
export default Clock;