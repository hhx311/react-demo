/**
 * Created by Jason
 */
import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import asyncComponent from './components/AsyncComponent';

const Clock = asyncComponent(() => import('./components/Clock/Clock'));
const LoginControl = asyncComponent(() => import('./components/Login/LoginControl'));
const CommentBox = asyncComponent(() => import('./components/CommentBox/CommentBox'));
const Home = asyncComponent(() => import('./components/Home/Home'));
const List = asyncComponent(() => import('./components/List/List'));
const TemperatureCalculator = asyncComponent(() => import('./components/TemperatureCalculator/TemperatureCalculator'));
const FilterableProductTable = asyncComponent(() => import('./components/FilterableProductTable/FilterableProductTable'));
const PropsChild = asyncComponent(() => import('./components/PropsChild/PropsChild'));
const TodoApp = asyncComponent(() => import('./components/TodoApp/TodoApp'));
const Weather = asyncComponent(() => import('./components/Weather/Weather'));
const Nav = asyncComponent(() => import('./components/Nav'));

const Routes = () => (
    <Router>
        <React.Fragment>
            <Nav/>
            <Route exact path="/" component={LoginControl}/>
            <Route path="/login-control" component={LoginControl}/>
            <Route path="/clock" component={Clock}/>
            <Route path="/comment-box" component={CommentBox}/>
            <Route path="/home" component={Home}/>
            <Route path="/list" component={List}/>
            <Route path="/temperature-calculator" component={TemperatureCalculator}/>
            <Route path="/filterable-product-table" component={FilterableProductTable}/>
            <Route path="/props-child" component={PropsChild}/>
            <Route path="/todo-app" component={TodoApp}/>
            <Route path="/weather" component={Weather}/>
        </React.Fragment>
    </Router>
);
export default Routes;