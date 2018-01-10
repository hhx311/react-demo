/**
 * Created by Jason
 */
import React, {Component} from 'react';
import './Comment.scss';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove() {
        // this.props.onRemoveComment(this.state.comment);
        // console.log('点击了1');
    }

    render() {
        const comment = this.props.comment;
        return (
            <li className="Comment" onDoubleClick={this.handleRemove}>
                <span className="item name">用户名: {comment.name}</span>
                <span className="item content">内容: {comment.content}</span>
                <span className="item time">发布日期: {comment.time}</span>
            </li>
        );
    }
}

export default Comment;