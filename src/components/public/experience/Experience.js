import React from 'react';
import Skill from './Skill';

class Experience extends React.Component{
    state={
        internals:[
            {
                img:'img',
                content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, pariatur.'
            },
            {
                img:'img',
                content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, pariatur.'
            },
            {
                img:'img',
                content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, pariatur.'
            },
            {
                img:'img',
                content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, pariatur.'
            }
        ],
        skills:[
            {
                img:'css3.svg',
                level:90
            },
            {
                img:'html5.svg',
                level:90
            },
            {
                img:'js.svg',
                level:70
            },
            {
                img:'node.svg',
                level:60
            },
            {
                img:'php.svg',
                level:70
            },
            {
                img:'ps.svg',
                level:60
            },
            {
                img:'react.svg',
                level:70
            },
            {
                img:'redux.svg',
                level:70
            },
        ]


    }
    render(){
        const internals = this.state.internals.map((int,i) => {
            return(
                <div key={i} className="wrapper">
                    <div>{int.img}</div>
                    <h4>{int.content}</h4>
                </div>
            )
        });
        const skills = this.state.skills.map((sk,i) => {
            return(
                <Skill key={i} sk={sk}/>
            );
        });
        return(
            <div className="experience">
                <h2>Experience</h2>
                <div className="internals">
                    <div className="box container">
                        {internals}
                    </div>
                </div>
                <div className="skills-box container">
                    {skills}
                </div>
            </div>
        )
    }
}

export default Experience