import {createStore, combineReducers} from 'redux';
import global_reducer from './globals/global-reducer';

const rootReducer =  combineReducers({
        global: global_reducer
})
export default rootReducer;