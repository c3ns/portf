import {LOG_IN, LOG_OUT} from '../actions/all-types';

const initState = {
    isAdmin:false,
    user:null,
};

export default(state=initState, action)=>{
    switch (action.type){
        case LOG_IN :
            return {
                isAdmin:action.payload.isAdmin,
                user:action.payload
            };
        case LOG_OUT :
            return initState;
        default: return state;
    }
}
