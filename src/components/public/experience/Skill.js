import React from 'react';
import {fillBarAnim} from '../../../utils/fillBarAnim';
import {CSSTransition} from 'react-transition-group'
// import {Bar} from '../../../utils/BarCss';
//import styled from 'styled-components';

class Skill extends React.Component{
    state={
        show:false
    }
    render(){
        const {img,level} = this.props.data;
        const anim = {
                animation: `${fillBarAnim(level)} 1.5s linear forwards`
        }
        return(
            <div className="skill">
                <div className="skill-bar">
                    {/*<Bar level={level} className="skill-active">*/}
                        {/*<p>{level}%</p>*/}
                    {/*</Bar>*/}

                    {this.props.show && <div style={this.props.show? anim:{}} className="skill-active">
                        <p>{level}%</p>
                    </div>}

                </div>
                <img src={`http://localhost:3000/img/skills/${img}.svg`} alt=""/>
            </div>
        )
    }

};

export default Skill