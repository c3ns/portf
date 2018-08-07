import {
    REMOVE_PROJECT,
    ADD_PROJECT,
    UPDATE_PROJECT,
    FETCH_PROJECTS
} from '../actions/types';


const projectsReducer = (state=null, action) => {
    switch (action.type){
        case FETCH_PROJECTS: return action.payload;
        case REMOVE_PROJECT:
            return state.filter((proj,i) => {return i!== action.payload});
        case UPDATE_PROJECT:
            return state.map((proj) => {
               if(proj._id === action.payload._id)
                   return action.payload
               else
                   return proj
            });
        case ADD_PROJECT: return [...state,action.payload];
        default: return state;
    }
}

export default projectsReducer;