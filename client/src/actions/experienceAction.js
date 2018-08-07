import * as types from './types';
import axios from "axios/index";

export function fetchExperience() {
    return async function (dispatch) {
        try{
            const {data:{skills, abilities}} = await axios.get('/api/page-content');
            dispatch({
                type:types.FETCH_EXPERIENCE,
                payload:{skills,abilities}
            })
        }catch (err){
            console.log(err);
        }
    }
}
export function addAbility(ability) {
    return async function (dispatch) {
        try{
            await axios.post('/api/page-content/abilities', ability)
            dispatch({
                type:types.ADD_ABILITY,
                payload:ability
            })
        }catch (err){
            console.log(err);
        }
    }
}
export function updateAbility(ability) {
    return async function (dispatch) {
        try{
            await axios.post('/api/page-content/abilities/update', ability)
            dispatch({
                type:types.UPDATE_ABILITY,
                payload:ability
            })
        }catch (err){
            console.log(err);
        }
    }
}
export function addSkill(skill) {
    return async function (dispatch) {
        try{
            await axios.post('/api/page-content/skills', skill);
            dispatch({
                type:types.ADD_SKILLS,
                payload:skill
            })
        }catch(err){
            console.log(err);
        }
    }
}
export function updateSkill(skill) {
    return async function (dispatch) {
        try{
            await axios.post('/api/page-content/skills/update', skill);
            dispatch({
                type:types.UPDATE_SKILLS,
                payload:skill
            })
        }catch (err){
            console.log(err);
        }
    }
}
