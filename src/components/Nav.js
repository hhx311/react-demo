/**
 * Created by Jason
 */
import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => (
    <ul className="nav-tabs">
        <li><Link to="/clock">Clock</Link></li>
        <li><Link to="/login-control">LoginControl</Link></li>
        <li><Link to="/comment-box">CommentBox</Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/list">List</Link></li>
        <li><Link to="/temperature-calculator">TemperatureCalculator</Link></li>
        <li><Link to="/filterable-product-table">FilterableProductTable</Link></li>
        <li><Link to="/props-child">PropsChild</Link></li>
        <li><Link to="/todo-app">TodoApp</Link></li>
        <li><Link to="/weather">Weather</Link></li>
    </ul>
);

export default Nav;