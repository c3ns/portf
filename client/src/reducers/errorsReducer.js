import * as type from '../actions/types';

export default (state={}, action) => {
    switch(action.type){
        case type.CLEAR_ERRORS: return {};
        case type.GET_ERRORS: return action.payload;
        default: return state;
    }
}