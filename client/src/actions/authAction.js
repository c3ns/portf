import {LOG_IN, LOG_OUT, GET_ERRORS} from './types';
import jwt from 'jsonwebtoken';
import axios from 'axios';

export function login(data,history) {
    return async function (dispatch) {
        try{
            const res = await axios.post('/api/login', data);

            localStorage.setItem('portf-token', 'Bearer '+res.data);
            axios.defaults.headers.common['Authorization'] = 'Bearer '+res.data;
            const user = jwt.decode(res.data);

            dispatch({
                type:LOG_IN,
                payload:user
            });
             history.push('/admin');
        }catch(err) {
            dispatch({
                type:GET_ERRORS,
                payload:err.response.data
            })
        }
    }
}

export function setUser(user) {
    return {
        type: LOG_IN,
        payload:user
    }
}

export function logout() {
    localStorage.removeItem('portf-token');
    delete axios.defaults.headers.common['Authorization'];
    return {
        type:LOG_OUT
    }
}
