import React from 'react';
import Skill from './Skill';
import Ability from './Ability';
import {CSSTransition} from 'react-transition-group';

class Experience extends React.Component{
    state= {
        internals: [
            {
                title: 'creative',
                content: 'Lorem i elit. Ipsa, pariatur.',
                show: false,
            },
            {
                title: 'dynamic',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, pariatur.',
                show: false,
            },
            {
                title: 'fast',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, pariatur.',
                show: false,
            },

        ],
        skills: [
            {
                img: 'css3',
                level: 30
            },
            {
                img: 'html5',
                level: 50
            },
            {
                img: 'js',
                level: 70
            },
            {
                img: 'node',
                level: 50
            },
            {
                img: 'php',
                level: 20
            },
            {
                img: 'ps',
                level: 60
            },
            {
                img: 'react',
                level: 70
            },
            {
                img: 'redux',
                level: 100
            },
        ]
    }

    onMouseHandle = (index,show) => {
        const internals = this.state.internals.map((inter,i) => {
            return( index===i? {...inter,show}:inter);
        });
        this.setState({internals});
    };

    render(){
        const internals = this.state.internals.map((int,i) => {
            return(
                <CSSTransition
                    in={int.show}
                    key={i}
                    classNames="ability"
                    timeout={400}
                >
                    <div
                        key={i}
                        className="wrapper "
                        onMouseEnter={() => this.onMouseHandle(i,true)}
                        onMouseLeave={() => this.onMouseHandle(i,false)}
                    >
                        <Ability data={int}/>
                        {int.show && <div className="content"><p>{int.content}</p></div>}
                    </div>
                </CSSTransition>
            )
        });
        const skills = this.state.skills.map((sk,i) => <Skill key={i} sk={sk}/>);

        return(
            <div className="experience">
                <h2>Skills</h2>
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