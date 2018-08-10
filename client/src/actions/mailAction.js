import * as types from './types';
import axios from 'axios';

export function addLetter(mail) {
    return async function (dispatch) {
        try{
            await axios.post('/api/mail',mail);
            dispatch({
                type:types.ADD_MAIL,
                payload:mail
            });
        }catch (err){
            dispatch({
                type:types.GET_ERRORS,
                payload:err.response.data
            });
        };
    };
};