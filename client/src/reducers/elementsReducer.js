import * as types from '../actions/types';

const elementsReducer = (state=[],action) => {
    switch (action.type){
        case types.ADD_ELEMENT: return [...state,action.payload];
        case types.DELETE_ELEMENTS: return [];
        case types.CHANGE_ELEMENT_COORDS: return [...state];
        default:return state;
    }
}

export default elementsReducer;