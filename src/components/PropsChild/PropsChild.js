/**
 * Created by Jason
 */
import React, {Component} from 'react';

class Aa extends Component {
    render() {
        return (
            <div>
                <Ab title={this.props.title}/>
                <Ac content={this.props.content}/>
                {this.props.children}
            </div>
        );
    }
}
class Ab extends Component {
    render() {
        return (
            <div>
                {this.props.title}
            </div>
        );
    }
}
class Ac extends Component {
    render() {
        return (
            <div>
                {this.props.content}
            </div>
        );
    }
}

class PropsChild extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'props-child xxx',
            content: '这是子元素扩展'
        };
    }

    render() {
        return (
            <div className="PropsChild">
                <Aa
                    title={this.state.title}
                    content={this.state.content}
                >
                    卧槽泥马
                </Aa>
            </div>
        );
    }
}
export default PropsChild;