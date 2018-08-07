import * as types from './types';
//elements
export function AddElement(element) {
    return {
        type: types.ADD_ELEMENT,
        payload: element
    }
}
export function DeleteElements() {
    return {
        type: types.DELETE_ELEMENTS,
    }
}
export function ChangeCoords(index,stage) {
    return (dispatch,getState) => {
        const {elements} = getState();
        let x= Math.floor(Math.random()*(window.innerWidth)-400);
        let y= Math.floor(Math.random()*(window.innerHeight)-300);
        let show = true;
        if(stage){
            x=800;
            y=300;
            show=false;
        }
        const maped = elements.map((el,i) => {
            if(i === index){
                el.x=x;
                el.y=y;
                el.show=show;
            }
            return el;
        });
        dispatch({
            type: types.CHANGE_ELEMENT_COORDS,
            payload: maped
        })
    }
}
//page
export function setTopPos(value) {
    return {
        type:types.SET_TOP_POSITION,
        payload:value
    }
}