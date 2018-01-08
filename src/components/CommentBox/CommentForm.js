/**
 * Created by Jason
 */
import React, {Component} from 'react';
import './CommentForm.scss';

class CommentForm extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            comment_added: {
                name: '',
                content: '',
                time: ''
            },
            isActive: false
        };
        this.handleAddComment = this.handleAddComment.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleAddComment() {
        if (this.state.comment_added.name && this.state.comment_added.content) {
            this.props.onAddComment(this.state.comment_added);

            this.setState({
                comment_added: {
                    name: '',
                    content: '',
                    time: ''
                },
                isActive: false
            });
        }
    }

    handleChange(event) {
        let {name, content} = this.state.comment_added;
        if (event.target.name === 'userName') {
            name = event.target.value;
        } else if (event.target.name === 'commentContent') {
            content = event.target.value;
        }
        this.setState({
            comment_added: {
                name: name,
                content: content,
                time: new Date().toLocaleDateString()
            },
            isActive: !!(name && content)
        });
    }

    render() {
        const name = this.state.comment_added.name;
        const content = this.state.comment_added.content;
        return (
            <div className="CommentForm">
                <input type="text" name="userName"
                       value={name ? name : ''}
                       placeholder="请输入用户名..."
                       onChange={this.handleChange}
                />
                <textarea
                    name="commentContent"
                    rows="10"
                    value={content ? content : ''}
                    placeholder="请在此处添加评论..."
                    onChange={this.handleChange}
                />
                <button className={this.state.isActive ? "active" : ""} onClick={this.handleAddComment}>添加评论</button>
            </div>
        );
    }
}
export default CommentForm;
