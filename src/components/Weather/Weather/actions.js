/**
 * Created by Jason
 */
import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from './actionTypes'

export const fetchWeatherStarted = () => ({
    type: FETCH_STARTED
});

export const fetchWeatherSuccess = (result) => ({
    type: FETCH_SUCCESS,
    result
});

export const fetchWeatherFailure = (error) => ({
    type: FETCH_FAILURE,
    error
});

/*
let nextSeqId = 0;

export const fetchWeather = cityCode => dispatch => {
    const url = `/data/cityinfo/${cityCode}.html`;
    const seqId = ++nextSeqId;
    const dispatchIfValid = (action) => {
        if (seqId === nextSeqId) {
            return dispatch(action);
        }
    };
    dispatchIfValid(fetchWeatherStarted());
    return (
        fetch(url)
            .then(response => {
                    if (response.status !== 200) {
                        throw new Error('Fail to get response with status ' + response.status);
                    }

                    response.json().then(data => {
                        dispatchIfValid(fetchWeatherSuccess(data.weatherinfo));
                    }).catch(error => {
                        dispatchIfValid(fetchWeatherFailure(error));
                    })
                }
            )
            .catch(error => {
                dispatchIfValid(fetchWeatherFailure(error));
            })
    );
}
*/

export const fetchWeather = cityCode => {
    const url = `/data/cityinfo/${cityCode}.html`;
    return {
        promise: fetch(url).then(response => {
                if (response.status !== 200) {
                    throw new Error('Fail to get response with status ' + response.status);
                }

                return response.json().then(data => data.weatherinfo);
            }
        ),
        types: [FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE]
    };
}