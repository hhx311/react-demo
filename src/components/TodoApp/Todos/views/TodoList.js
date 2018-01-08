/**
 * Created by Jason
 */
import React from 'react';
import {connect} from 'react-redux';
import TodoItem from "./TodoItem";
import {selectVisibleTodos} from './selectVisibleTodos';
// import {CSSTransitionGroup} from 'react-transition-group';
import {spring, TransitionMotion} from 'react-motion';
// import {toggleTodo, removeTodo} from '../actions';
// import './TodoList.scss';

/*

const TodoList = ({todos}) => {
    return (
        <ul className="todo-list">
            <CSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}
            >
                {
                    todos.map((item) =>
                        <TodoItem
                            key={item.id}
                            id={item.id}
                            text={item.text}
                            completed={item.completed}
                        />
                    )
                }
            </CSSTransitionGroup>
        </ul>
    );
}

*/


const TodoList = ({todos}) => {

    const getStyles = todos => (
        todos.map(item => ({
            key: item.id.toString(),
            data: item,
            style: {
                height: spring(1),
                opacity: spring(1)
            }
        }))
    );

    const willEnter = () => ({
        height: 0,
        opacity: 0
    });

    const willLeave = () => ({
        height: spring(0),
        opacity: spring(0)
    });
    const styles = getStyles(todos);
    return (
        <TransitionMotion
            willEnter={willEnter}
            willLeave={willLeave}
            styles={styles}
        >
            {
                interpolatedStyles =>
                    <ul className="todo-list">
                        {
                            interpolatedStyles.map(config => {
                                const {data, style, key} = config;
                                return (
                                    <TodoItem
                                        style={style}
                                        key={key}
                                        id={data.id}
                                        text={data.text}
                                        completed={data.completed}
                                    />
                                );
                            })
                        }
                    </ul>
            }
        </TransitionMotion>
    );
}


const mapStateToProps = (state) => {
    return {
        todos: selectVisibleTodos(state)
    }
};

// const mapDispatchToProps = {
//         onToggleTodo: toggleTodo,
//         onRemoveTodo: removeTodo
// };
/******
 * 等同上面的写法
 const mapDispatchToProps = (dispatch) => {
    return {
        onToggleTodo: (id) => {
            dispatch(toggleTodo(id));
        },
        onRemoveTodo: (id) => {
            dispatch(removeTodo(id));
        }
    };
};
 ******/

export default connect(mapStateToProps)(TodoList);