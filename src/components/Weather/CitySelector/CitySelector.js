/**
 * Created by Jason
 */
import React from 'react';
import {connect} from 'react-redux';
import {actions as weatherActions} from '../Weather/index';

const cities = {
    '北京': 101010100,
    '杭州': 101210101,
    '深圳': 101280601,
    '上海': 101020100,
    '哈尔滨': 101050101,
    '拉萨': 101140101
};

class CitySelector extends React.Component {
    constructor(props) {
        super(props);
        this.handleCitySelect = this.handleCitySelect.bind(this);
    }

    handleCitySelect(e) {
        const cityCode = e.target.value;
        this.props.onSelectCity(cityCode);
    }

    componentDidMount() {
        const defaultCity = Object.keys(cities)[2]; //深圳
        this._select.value = cities[defaultCity];
        this.props.onSelectCity(cities[defaultCity]);
    }

    render() {
        return (
            <select className="CitySelector" onChange={this.handleCitySelect} ref={select => this._select = select}>
                {
                    Object.keys(cities).map(
                        cityName =>
                            <option key={cityName} value={cities[cityName]}>
                                {cityName}
                            </option>
                    )
                }
            </select>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    onSelectCity: (cityCode) => {
        dispatch(weatherActions.fetchWeather(cityCode));
    }
});

export default connect(null, mapDispatchToProps)(CitySelector);