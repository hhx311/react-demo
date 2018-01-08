/**
 * Created by Jason
 */
import React, {Component} from 'react';
import './CommentBox.scss';
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

class CommentBox extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            comments: [
                {"name": "David", "content": "哈哈哈", "time": "2017-12-05"},
                {"name": "Jim", "content": "O(∩_∩)O哈哈~😁", "time": "2017-12-05"},
                {"name": "Susan", "content": "哦哦/(ㄒoㄒ)/~~", "time": "2017-12-05"}
            ]
        };
        this.handleAddComment = this.handleAddComment.bind(this);
        this.handleRemoveComment = this.handleRemoveComment.bind(this);
    }

    componentDidMount() {
        // const comments = fetch('../../data/comments.json').then(res => res.json)
        //     .then(value => {
        //         console.log(value);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
    }

    handleAddComment(comment) {
        this.setState(prevState => ({
            comments: [...prevState.comments, comment]
        }));
    }

    handleRemoveComment(comment) {

    }

    render() {
        return (
            <div className="CommentBox">
                <CommentList comments={this.state.comments} onRemoveComment={this.handleRemoveComment}/>
                <CommentForm onAddComment={this.handleAddComment}/>
            </div>
        );
    }
}
export default CommentBox;