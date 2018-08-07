import * as types from './types';

export function handleMenu(value) {
    return{
        type:types.HANDLE_MENU,
        payload:value
    }
}