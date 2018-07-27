import * as types from '../actions/all-types';

const page ={
    position:[0]
}

const pageReducer = (state=page,action) => {
    switch (action.type) {
        case types.SET_TOP_POSITION: {
            const position = [...state.position,action.payload]
            return {...state,position}
        }
        default:{
            return state;
        }

    }
}

export default pageReducer;