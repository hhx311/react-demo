/**
 * Created by Jason
 */
import React, {Component} from 'react';
import './CommentList.scss';
import Comment from "./Comment";

class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleRemoveComment = this.handleRemoveComment.bind(this);
    }

    handleRemoveComment(comment) {
        // this.props.onRemoveComment(comment);
        // console.log(comment, '2');
    }

    render() {
        const comments = this.props.comments;
        const commentNodes = comments.map((comment, index) => (
            <Comment key={`coment-${index}`}
                     comment={comment}
                     onRemoveComment={this.handleRemoveComment}
            />
        ));

        return (
            <ul className="CommentList">
                {commentNodes}
            </ul>
        );
    }
}

export default CommentList;