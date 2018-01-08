/**
 * Created by Jason
 */
import React from 'react';
import {connect} from 'react-redux';
import {toggleTodo, removeTodo} from '../actions';
import './TodoItem.scss';

const TodoItem = ({text, completed, onToggle, onRemove}) => (
    <li className={'todo-item' + (completed ? ' todo-item-done' : '')}>
        <input type="checkbox"
               className="toggle"
               checked={completed ? true : false}
               readOnly
               onClick={onToggle}
        />
        <label className="text">{text}</label>
        <button className="remove" onClick={onRemove}>x</button>
    </li>
);

const mapDispatchToProps = (dispatch, ownProps) => ({
    onToggle: () => dispatch(toggleTodo(ownProps.id)),
    onRemove: () => dispatch(removeTodo(ownProps.id))
});

export default connect(null, mapDispatchToProps)(TodoItem);