import * as types from '../actions/all-types';

const menu = {
    list: ['home', 'about me', 'Experience', 'portfolio', 'contact me'],
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