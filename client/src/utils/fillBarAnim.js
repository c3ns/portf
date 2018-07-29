import {keyframes} from 'styled-components';

export function fillBarAnim(level){
    return keyframes`
        0% {
            height: 0;
        }
        100% {
            height: ${level}%
        }
    `
}

