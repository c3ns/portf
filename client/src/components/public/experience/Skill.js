import React from 'react';
import {fillBarAnim} from '../../../utils/fillBarAnim';
// import {Bar} from '../../../utils/BarCss';
//import styled from 'styled-components';

const Skill = (props) =>  {
    const {img,level} = props.data;
    const anim = { animation: `${fillBarAnim(level)} 1.5s linear forwards` }
    return(
        <div className="skill">
            <div className="skill-bar">
                {/*<Bar level={level} className="skill-active">*/}
                    {/*<p>{level}%</p>*/}
                {/*</Bar>*/}

                <div style={props.show? anim:{}} className="skill-active">
                    <p>{level}%</p>
                </div>
            </div>
            <img src={`/skills/${img}.svg`} alt=""/>
        </div>
    )
};

export default Skill