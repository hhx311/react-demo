/**
 * Created by Jason
 */
import React from 'react';
import {Provider} from 'react-redux';
import {view as CitySelector} from './CitySelector/index';
import {view as Weather} from './Weather/index'
import store from './Store';
import './Weather.scss';

const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <CitySelector/>
                <Weather/>
            </div>
        </Provider>
    );
}
export default App;