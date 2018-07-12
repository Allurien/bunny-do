import types from './types';
import bunnyAxios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=c418allu';

export function getBunnyData(){
    const response = bunnyAxios.get(`${BASE_URL}/todos${API_KEY}`);
    console.log('axios resp', response);
    return {
        type: types.GET_LIST_DATA,
        payload: response
    }
}
export function sendBunnyToDoItem(item){
    const response = bunnyAxios.post(`${BASE_URL}/todos${API_KEY}`, item);
    return {
        type: types.ADD_ITEM,
        payload: response
    }
}
export function getSingleBunnyToDo(id){
    const response = bunnyAxios.get(`${BASE_URL}/todos/${id+API_KEY}`);
    return {
        type: types.VIEW_ITEM,
        payload: response
    }
}