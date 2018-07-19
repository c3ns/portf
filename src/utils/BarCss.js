import styled from 'styled-components';
import {fillBarAnim} from "./fillBarAnim";

export const Bar = styled.div`
    animation: ${fillBarAnim(props=>props.level)} 1.5s linear forwards
`