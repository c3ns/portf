import * as types from './types';
import axios from 'axios';

export function fetchProjects() {
    return async function (dispatch) {
        try{
            const res = await axios.get('/api/page-content');
            dispatch({
                type:types.FETCH_PROJECTS,
                payload:res.data.projects
            });
        }catch(err){
            console.log(err);
        };
    };
};
export function removeProject(projIndex) {
    return {
        type:types.REMOVE_PROJECT,
        payload:projIndex
    };
};
export function addProject(proj) {
    return async function (dispatch) {
        try{
            await axios.post('/api/page-content/projects', proj);
            dispatch({
                type:types.ADD_PROJECT,
                payload: proj
            });
        }catch (err){
            console.log(err);
        }
    };
};
export function editProject(proj) {
    return async function (dispatch) {
        try{
            await axios.post('/api/page-content/projects/update', proj);
            dispatch({
                type:types.UPDATE_PROJECT,
                payload:proj
            });
        }catch (err){
            console.log(err);
        };
    };
};