import {REMOVE_PROJECT,ADD_PROJECT,UPDATE_PROJECT} from '../actions/all-types';

const projects=[
        {
            _id:1,
            content:'Lorizzle ipsum nizzle sizzle amizzle, consectetuer mah nizzle away.',
            link:'project 1',
            img:'project1',
        },
        {
            _id:2,
            content:'Lorizzle ipsum nizzle sizzle amizzle, consectetuer mah nizzle away.',
            link:'project 2',
            img:'project1',
        },
        {
            _id:3,
            content:'Lorizzle ipsum nizzle sizzle amizzle, consectetuer mah nizzle away.',
            link:'project 3',
            img:'project1_img',
        },
        {
            _id:4,
            content:'Lorizzle ipsum nizzle sizzle amizzle, consectetuer mah nizzle away.',
            link:'project 4',
            img:'project1',
        }
    ]

const projectsReducer = (state=projects, action) => {
    switch (action.type){
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