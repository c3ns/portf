import {UPDATE_CONTENT,FETCH_CONTENT} from './types';
import axios from "axios/index";


export function fetchContent() {
    return async function (dispatch) {
        try{
             const {data:{contactTitle, homeTitle}} = await axios.get('/api/page-content');
             dispatch({
                 type:FETCH_CONTENT,
                 payload:{contactTitle,homeTitle}
             })
        }catch (err){
            console.log(err);
        }
    }
}
export function updateContent(cont) {
    const {title,content} = cont;
    return async function (dispatch) {
        try{
            console.log(content);
            await axios.post(`/api/page-content/${title}/update`, {[title]:content});
            dispatch({
                type:UPDATE_CONTENT,
                payload:cont
            })
        }catch (err){
            console.log(err);
        }
    }
}

