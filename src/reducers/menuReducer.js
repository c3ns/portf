import * as types from '../actions/all-types';

const menu = {
    list: ['home', 'skills', 'portfolio', 'contact me'],
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