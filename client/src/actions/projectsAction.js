import {REMOVE_PROJECT, ADD_PROJECT, UPDATE_PROJECT} from './all-types';

export function removeProject(projIndex) {
    return {
        type:REMOVE_PROJECT,
        payload:projIndex
    }
};
export function addProject(proj) {
    return {
        type:ADD_PROJECT,
        payload:proj
    }
};
export function editProject(proj) {
    return {
        type:UPDATE_PROJECT,
        payload:proj
    }
}