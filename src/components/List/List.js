/**
 * Created by Jason
 */
import React, {Component} from 'react';
import './List.scss';

class EssayForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please write',
            select: '深圳'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSelect(event) {
        this.setState({
            select: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        const citys = ['北京', '上海', '深圳', '杭州'];
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <textarea value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
                <br/>
                <select name="" id=""
                        value={this.state.select}
                        onChange={this.handleSelect}
                >
                    {citys.map(city =>
                        <option value={city}
                                key={city.toString()}
                        >
                            {city}
                        </option>
                    )}
                </select>
            </form>
        );
    }
}

class List extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        const arr = [1, 3, 4, 6];
        return (
            <div className="List">
                <ul style={{marginBottom: '10px'}}>
                    {
                        arr.map((num, index) => <li key={num}>{num * num}</li>)
                    }
                </ul>
                <EssayForm/>
            </div>
        );
    }
}
export default List;