/**
 * Created by Jason
 */
import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes';

let todoID = 0;

const addTodo = (text) => ({
    type: ADD_TODO,
    completed: false,
    id: todoID++,
    text: text
});

const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id: id
});

const removeTodo = (id) => ({
    type: REMOVE_TODO,
    id: id
});

export {addTodo, toggleTodo, removeTodo};