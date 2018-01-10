/**
 * Created by Jason
 */
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

{/*<ul>
    <li><Link to="/home">首页</Link></li>
    <li><Link to="/about">关于</Link></li>
    <li><Link to="/topics">主题列表</Link></li>
</ul>

<Route exact path="/" component={Home}/>
    <Route path="/home" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/topics" component={Topics}/>*/}

const BasicExample = ({match}) => (
    <Router>
        <React.Fragment>

            <ul>
                <li><Link to={`${match.url}/home`}>首页</Link></li>
                <li><Link to={`${match.url}/about`}>关于</Link></li>
                <li><Link to={`${match.url}/topics`}>主题列表</Link></li>
            </ul>

            <Route exact path={`${match.url}/`} component={Home}/>
            <Route path={`${match.url}/home`} component={Home}/>
            <Route path={`${match.url}/about`} component={About}/>
            <Route path={`${match.url}/topics`} component={Topics}/>

        </React.Fragment>
    </Router>
);

const Home = () => (
    <div>
        <h2>首页</h2>
    </div>
);

const About = () => (
    <div>
        <h2>关于</h2>
    </div>
);

const Topics = ({match}) => (
    <div>
        <h2>主题列表</h2>
        <ul>
            <li><Link to={`${match.url}/encapsulation`}>封装</Link></li>
            <li><Link to={`${match.url}/inheritance`}>继承</Link></li>
            <li><Link to={`${match.url}/polymorphism`}>多态</Link></li>
        </ul>

        <Route path={`${match.url}/:topicID`} component={Topic}/>
        <Route exact path={`${match.url}/`} render={() => (<div>请选择列表...</div>)}/>
    </div>
);

const Topic = ({match}) => (
    <div>
        {match.params.topicID}
    </div>
);

export default BasicExample;

