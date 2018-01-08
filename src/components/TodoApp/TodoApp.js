/**
 * Created by Jason
 */
import React from 'react';
import {view as Todos} from './Todos/index';
import {view as Filter} from './Filter/index';
import {Provider} from 'react-redux';
import store from './Store';
import './TodoApp.scss';

const TodoApp = () => (
    <Provider store={store}>
        <div className="todo-app">
            <Todos/>
            <Filter/>
        </div>
    </Provider>
);
export default TodoApp;