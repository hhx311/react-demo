/**
 * Created by Jason
 */
import {createStore, combineReducers} from 'redux';
import {reducer as todoReducer} from './Todos/index';
import {reducer as filterReducer} from './Filter/index';

const reducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer
});

export default createStore(reducer);

