/**
 * Created by Jason
 */
import React, {Component} from 'react';

const unitNames = {
    c: '摄氏温度',
    f: '华氏温度'
};

class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange({
            temperature: e.target.value,
            unit: this.props.unit
        });
    }

    render() {
        const temperature = this.props.temperature;
        const unit = this.props.unit;
        return (
            <fieldset>
                <legend>输入一个{unitNames[unit]}</legend>
                <input type="text"
                       value={temperature}
                       onChange={this.handleChange}
                />
            </fieldset>
        );
    }
}

export default TemperatureInput;