/**
 * Created by Jason
 */
import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import {asyncComponentBundle} from './components/AsyncComponent';
// import {asyncComponentAwait} from './components/AsyncComponent';
import Nav from './components/Nav/Nav';

const LoginControl = asyncComponentBundle(() => import('./components/Login/LoginControl'));
const CommentBox = asyncComponentBundle(() => import('./components/CommentBox/CommentBox'));
const Home = asyncComponentBundle(() => import('./components/Home/Home'));
const List = asyncComponentBundle(() => import('./components/List/List'));
const TemperatureCalculator = asyncComponentBundle(() => import('./components/TemperatureCalculator/TemperatureCalculator'));
const FilterableProductTable = asyncComponentBundle(() => import('./components/FilterableProductTable/FilterableProductTable'));
const PropsChild = asyncComponentBundle(() => import('./components/PropsChild/PropsChild'));
const TodoApp = asyncComponentBundle(() => import('./components/TodoApp/TodoApp'));
const Weather = asyncComponentBundle(() => import('./components/Weather/Weather'));
const RouterDemo = asyncComponentBundle(() => import('./pages/router-demo/index'));

// const Clock = asyncComponentAwait(() => import('./components/Clock/Clock'));
// const LoginControl = asyncComponentAwait(() => import('./components/Login/LoginControl'));
// const CommentBox = asyncComponentAwait(() => import('./components/CommentBox/CommentBox'));
// const Home = asyncComponentAwait(() => import('./components/Home/Home'));
// const List = asyncComponentAwait(() => import('./components/List/List'));
// const TemperatureCalculator = asyncComponentAwait(() => import('./components/TemperatureCalculator/TemperatureCalculator'));
// const FilterableProductTable = asyncComponentAwait(() => import('./components/FilterableProductTable/FilterableProductTable'));
// const PropsChild = asyncComponentAwait(() => import('./components/PropsChild/PropsChild'));
// const TodoApp = asyncComponentAwait(() => import('./components/TodoApp/TodoApp'));
// const Weather = asyncComponentAwait(() => import('./components/Weather/Weather'));
// const Nav = asyncComponentAwait(() => import('./components/Nav/Nav'));

const Routes = () => (
    <Router>
        <React.Fragment>
            <Nav/>
            <Route exact path="/" component={LoginControl}/>
            <Route path="/login-control" component={LoginControl}/>
            {/*<Route path="/clock" component={Clock}/>*/}
            <Route path="/comment-box" component={CommentBox}/>
            <Route path="/home" component={Home}/>
            <Route path="/list" component={List}/>
            <Route path="/temperature-calculator" component={TemperatureCalculator}/>
            <Route path="/filterable-product-table" component={FilterableProductTable}/>
            <Route path="/props-child" component={PropsChild}/>
            <Route path="/todo-app" component={TodoApp}/>
            <Route path="/weather" component={Weather}/>
            <Route path="/router-demo" component={RouterDemo}/>
        </React.Fragment>
    </Router>
);
export default Routes;