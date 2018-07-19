import React from 'react';
import {fillBarAnim} from '../../../utils/fillBarAnim';
// import {Bar} from '../../../utils/BarCss';
//import styled from 'styled-components';






class Skill extends React.Component{
    render(){
        const {img,level} = this.props.sk;
        const anim = {
                animation: `${fillBarAnim(level)} 1.5s linear forwards`
        }
        return(
            <div className="skill">
                <div className="skill-bar">
                    {/*<Bar level={level} className="skill-active">*/}
                        {/*<p>{level}%</p>*/}
                    {/*</Bar>*/}
                    <div style={anim} className="skill-active" >
                        <p>{level}%</p>
                    </div>
                </div>
                <img src={`http://localhost:3000/img/skills/${img}.svg`} alt=""/>
            </div>
        )
    }

};

export default Skill