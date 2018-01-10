/**
 * Created by Jason
 */
import React, {Component} from "react";

/*
* 通过es7的async和await语法实现按需加载
*/
const asyncComponentAwait = importComponent => (
    class AsyncComponent extends Component {
        constructor(props) {
            super(props);

            this.state = {
                component: null
            };
        }

        async componentDidMount() {
            const {default: component} = await importComponent();

            this.setState({
                component: component
            });
        }

        render() {
            const C = this.state.component;

            return C ? <C {...this.props} /> : null;
        }
    }
);


/*
* 通过仿bundle-loadable实现按需加载
*/
class Bundle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mod: null
        };
    }

    componentWillMount() {
        this.load(this.props)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }

    load(props) {
        this.setState({
            mod: null
        });
        //注意这里，使用Promise对象; mod.default导出默认
        props.load().then((mod) => {
            this.setState({
                mod: mod.default ? mod.default : mod
            });
        });
    }

    render() {
        return this.state.mod ? this.props.children(this.state.mod) : null;
    }
}
const asyncComponentBundle = ImportFunc => props => (
    <Bundle load={ImportFunc}>
        {(Module) => <Module {...props}/>}
    </Bundle>
);


export {asyncComponentAwait, asyncComponentBundle};