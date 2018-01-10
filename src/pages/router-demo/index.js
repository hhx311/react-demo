/**
 * Created by Jason
 */
import React from 'react';
import BasicExample from './BasicExample';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

const RouterDemo = ({match}) => (
    <Router>
        <React.Fragment>
            <Route path={`${match.url}`} component={BasicExample}/>
        </React.Fragment>
    </Router>
);

export default RouterDemo;