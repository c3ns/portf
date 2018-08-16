import React from 'react';
import Skill from './Skill';
import Ability from './Ability';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import {setTopPos} from "../../../actions/elementsAction";
import {handleMenu} from '../../../actions/menuAction';

class Experience extends React.Component{
    state={
        title:false,
        skills:false,
        fillBar:false,
        ability:false,
        menu:false
    }
    componentDidMount(){
        this.props.setTopPos(this.refs.experience.offsetTop);
    }
    componentDidUpdate(){
        const {posY} = this.props;
        const {offsetTop, offsetHeight} = this.refs.experience;
        if(posY > offsetTop-200 && posY < offsetTop+offsetHeight/2) {
            this.props.handleMenu(1);
        };
        if(!this.state.title && posY > 200) this.setState({title:true});
        if(!this.state.ability && posY > 200) this.setState({ability:true});
        if(!this.state.skills && posY > 600) this.setState({skills:true});
        if(!this.state.fillBar && posY > 800) this.setState({fillBar:true});

        if(this.state.title && posY < 200) this.setState({title:false});
        if(this.state.ability && posY < 200) this.setState({ability:false});
        if(this.state.skills && posY < 600) this.setState({skills:false});
        if(this.state.fillBar && posY < 800) this.setState({fillBar:false});
    }
    render(){
        const {abilities,skills} = this.props.experience;
        const abilitiesComp = abilities.map((int,i) => <Ability key={i} data={int}/>);
        const skillsComp = skills.map((sk,i) => <Skill key={i} data={sk} show={this.state.fillBar}/>);

        return(
            <div ref="experience" className="Experience">
                <CSSTransition
                    in={this.state.title}
                    key="h2"
                    classNames="h2"
                    timeout={300}
                >
                    <h2>Skills</h2>
                </CSSTransition>
                <div className="internals">
                    <CSSTransition
                        in={this.state.ability}
                        classNames="box"
                        timeout={300}
                    >
                        <div className="box container">
                            {abilitiesComp}
                        </div>
                    </CSSTransition>
                </div>
                <CSSTransition
                    in={this.state.skills}
                    key="skills"
                    classNames="skills"
                    timeout={300}
                >
                    <div className="skills-box container">
                    {skillsComp}
                    </div>
                </CSSTransition>
            </div>
        )
    }
}

const mapStateToProps = ({experience}) => ({experience})

export default connect(mapStateToProps,{setTopPos,handleMenu})(Experience)