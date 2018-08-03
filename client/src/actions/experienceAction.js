import {UPDATE_SKILLS,UPDATE_ABILITY} from './all-types';

export function updateSkill(skill) {
    return{
        type:UPDATE_SKILLS,
        payload:skill
    }
}
export function updateAbility(ability) {
    return {
        type:UPDATE_ABILITY,
        payload:ability
    }
}