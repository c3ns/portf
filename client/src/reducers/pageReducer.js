import {SET_TOP_POSITION,UPDATE_CONTENT} from '../actions/all-types';

const page ={
    position:[0],
    home:'Lorem ipsum dolor sit amet, consectetur adipisicing',
    contacts:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, hic optio qui quod sequi voluptatibus.'
}

const pageReducer = (state=page,action) => {
    switch (action.type) {
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