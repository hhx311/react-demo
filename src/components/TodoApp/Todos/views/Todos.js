/**
 * Created by Jason
 */
import React from 'react';
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
const Todos = () => {
    return (
        <div className="Todos">
            <AddTodo/>
            <TodoList/>
        </div>
    );
};

export default Todos;