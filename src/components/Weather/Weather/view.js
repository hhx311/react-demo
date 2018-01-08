/**
 * Created by Jason
 */
import React from 'react';
import {connect} from 'react-redux';
import * as Status from './status';

const Weather = ({status, cityName, weather, lowestTemprature, highestTemprature}) => {
    switch (status) {
        case Status.LOADING: {
            return (
                <div className="Weather">加载中...</div>
            );
        }
        case Status.SUCCESS: {
            return (
                <div className="Weather">
                    <span>{cityName}</span>
                    <span>{weather}</span>
                    <span>{lowestTemprature} ~ {highestTemprature}</span>
                </div>
            );
        }
        case Status.FAILURE: {
            return (
                <div className="Weather">加载失败!</div>
            );
        }
        default: {
            throw new Error('unexpected status' + status);
        }
    }
};

const mapStateToProps = (state) => ({
    status: state.status,
    cityName: state.city,
    weather: state.weather,
    lowestTemprature: state.temp1,
    highestTemprature: state.temp2
});

export default connect(mapStateToProps)(Weather);