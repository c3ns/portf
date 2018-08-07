import * as types from '../actions/types';

const experienceReducer = (state=null, action) => {
    switch (action.type){
        case types.FETCH_EXPERIENCE:
            return action.payload;
        case types.ADD_SKILLS:
            return {...state,skills:[...state.skills,action.payload]}
        case types.UPDATE_SKILLS:
            const skills = state.skills.map((skill) => {
                if(skill.img === action.payload.img)
                    return action.payload;
                else
                    return skill;
            });
            return {...state,skills}
        case types.ADD_ABILITY:
            return {...state,abilities:[...state.abilities,action.payload]}
        case types.UPDATE_ABILITY:
            const abilities = state.abilities.map((ability) =>  {
                if(ability.title === action.payload.title)
                    return action.payload;
                else
                    return ability;
            });
            return {...state,abilities};
        default: return state;
    }
}

export default experienceReducer;