/**
 * Created by Jason
 */
import React from 'react';

function BoilingVerdict(props) {
    let temperature = Math.round(parseFloat(props.temperature) * 1000) / 1000;
    if (Number.isNaN(temperature)) {
        temperature = ''
    }
    const isBoiling = temperature >= 100 ? true : false;
    if (isBoiling) {
        return <div style={{color: 'red'}}>当前水已沸腾</div>;
    } else {
        return <div>当前水温(℃): <span style={{color: '#66cc00'}}>{temperature}</span></div>;
    }
}

export default BoilingVerdict;