import {UPDATE_CONTENT} from './all-types';

export function updateContent(content) {
    return{
        type:UPDATE_CONTENT,
        payload:content
    }
}

