import {combineReducers as combineBunnyReducers} from 'redux';
import bunnyListReducer from './list-reducer';

const rootBunnyReducer = combineBunnyReducers({
    list: bunnyListReducer,
})
export default rootBunnyReducer;