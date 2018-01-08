/**
 * Created by Jason
 * 温度计算器, 摄氏温度和华氏温度 转换
 */
import React, {Component} from 'react';
import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function convertTemperature(temperature, convertFunc) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    } else {
        const output = convertFunc(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded;
    }
}

class TemperatureCalculator extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            temperature: '',
            unit: 'c' // c(摄氏度)/f(华氏度)
        };
        this.handleTemperatureChange = this.handleTemperatureChange.bind(this);
    }

    handleTemperatureChange(data) {
        this.setState({
            ...data
        });
    }

    render() {
        const temperature = this.state.temperature;
        const unit = this.state.unit;
        const celsius = unit === 'c' ? temperature : convertTemperature(temperature, toCelsius);
        const fahrenheit = unit === 'f' ? temperature : convertTemperature(temperature, toFahrenheit);
        return (
            <div className="TemperatureCalculator">
                <TemperatureInput
                    unit="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleTemperatureChange}
                />
                <TemperatureInput
                    unit="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleTemperatureChange}
                />
                <BoilingVerdict temperature={celsius}/>
            </div>
        );
    }
}
export default TemperatureCalculator;