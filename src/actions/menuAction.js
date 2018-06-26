import * as types from './all-types';

export function handleMenu(value) {
    return{
        type:types.HANDLE_MENU,
        payload:value
    }
}