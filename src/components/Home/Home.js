import React, {Component} from 'react';
import './Home.scss';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const style = {
    paddingBottom: "10px",
    fontSize: "1.5em"
};
const Tab1 = () => (
    <div style={{color: 'blue', ...style}}>这是tab1的内容</div>
);
const Tab2 = () => (
    <div style={{color: "deeppink", ...style}}>这是tab2的内容</div>
);
const Tab3 = () => (
    <div style={{color: "red", ...style}}>这是tab3的内容</div>
);

const users = [
    {
        "id": 1701,
        "name": "David",
        "friends": [1703, 1704]
    },
    {
        "id": 1702,
        "name": "Lily",
        "friends": [1701, 1704]
    },
    {
        "id": 1703,
        "name": "Lucy",
        "friends": [1701, 1702, 1704]
    },
    {
        "id": 1704,
        "name": "Jana",
        "friends": [1702, 1703]
    }
];

export default class Home extends Component {
    static defaultProps = {}
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            users: users
        };
    }

    render() {
        return (
            <Router>
                <div className="Home">
                    <ul className="nav-tabs">
                        <li><Link to="/">Tab1</Link></li>
                        <li><Link to="/tab2">Tab2</Link></li>
                        <li><Link to="/tab3">Tab3</Link></li>
                    </ul>
                    <div className="tab-content">
                        <Route exact path="/" component={Tab1}/>
                        <Route path="/tab2" component={Tab2}/>
                        <Route path="/tab3" component={Tab3}/>
                    </div>
                </div>
            </Router>
        );
    }
}