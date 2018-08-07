import {SET_TOP_POSITION,UPDATE_CONTENT,FETCH_CONTENT} from '../actions/types';

const page ={
    position:[0],
}

const pageReducer = (state=page,action) => {
    switch (action.type) {
        case FETCH_CONTENT:
            return {...state,...action.payload};
        case SET_TOP_POSITION: {
            const position = [...state.position,action.payload]
            return {...state,position}
        }
        case UPDATE_CONTENT:{
            const {title,content} = action.payload;
            return {...state,[title]:content};
        }
        default:return state;
    }
}

export default pageReducer;