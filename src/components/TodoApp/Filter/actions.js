/**
 * Created by Jason
 */
import {SET_FILTER} from './actionTypes';

const setFilter = (filterType) => ({
    type: SET_FILTER,
    filter: filterType
});

export {setFilter};