/**
 * Created by Jason
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';
import './AddTodo.scss';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const inputValue = this.state.inputValue;
        if (!inputValue.trim()) {
            return 0;
        } else {
            this.props.onAdd(inputValue);
            this.setState({
                inputValue: ''
            });
        }
    }

    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        });
    }

    render() {
        return (
            <div className="add-todo">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="请输入待办备忘..."
                        className="new-todo-text"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button className="add-btn">
                        添加
                    </button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (text) => {
            dispatch(addTodo(text))
        }
    };
};
export default connect(null, mapDispatchToProps)(AddTodo);