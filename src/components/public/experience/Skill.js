import React from 'react';

class Skill extends React.Component{
    render(){
        const {img,level} = this.props.sk;
        return(
            <div className="skill">
                <div className="skill-bar">
                    <div style={{height:level+'%'}} className="skill-active">
                        <p>{level}%</p>
                        {/*<div className="line"></div>*/}
                    </div>
                </div>
                <img src={'http://localhost:3000/img/skills/'+img} alt=""/>
            </div>
        )
    }

};

export default Skill