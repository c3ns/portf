import * as types from '../actions/types';

const menu = {
    list: ['home', 'skills', 'projects', 'contact me'],
    active: 0
}

const menuReducer = (state=menu, action) => {
    switch (action.type){
        case types.HANDLE_MENU :
            return {
                ...menu,
                active:action.payload
            }
        default: return state
    }
}

export default menuReducer;