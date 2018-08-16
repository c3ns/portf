import React from 'react';
import ProjectBox from './ProjectBox';
import {connect} from 'react-redux'
import {setTopPos} from '../../../actions/elementsAction';
import {CSSTransition} from 'react-transition-group';
import {handleMenu} from "../../../actions/menuAction";

class Projects extends React.Component{
    state={
        title:false,
        projects:false
    }
    componentDidMount(){
        this.props.setTopPos(this.refs.projects.offsetTop);
    }
    componentDidUpdate(){
        const {posY} = this.props;
        const {offsetTop, offsetHeight} = this.refs.projects;
        if(posY > offsetTop-200 && posY < offsetTop+offsetHeight/2) this.props.handleMenu(2);
        if(!this.state.title && posY > this.refs.projects.offsetTop - window.innerHeight-100) this.setState({title:true});
        if(!this.state.projects && posY > this.refs.projects.offsetTop - window.innerHeight+300) this.setState({projects:true});

        if(this.state.title && posY < this.refs.projects.offsetTop - window.innerHeight-100) this.setState({title:false});
        if(this.state.projects && posY < this.refs.projects.offsetTop - window.innerHeight+300) this.setState({projects:false});

    }
    render(){
        const projects = this.props.projects.map((proj,i) => {
            return(
                <CSSTransition
                    in={this.state.projects}
                    key={i}
                    classNames="proj"
                    timeout={300}
                >
                    <div key={i} className="proj">
                        <img src={`/projects/${proj.title}.jpg`} alt=""/>
                        <ProjectBox project={proj}/>
                    </div>
                </CSSTransition>
            );
        });

        return(
            <div ref="projects" className="Projects">
                <CSSTransition
                    in={this.state.title}
                    key="h2"
                    classNames="h2"
                    timeout={300}
                >
                    <h2>Projects</h2>
                </CSSTransition>
                <div className="container">
                    {projects}
                </div>
            </div>
        )
    }
};
const mapStateToProps = ({projects}) => ({projects});

export default connect(mapStateToProps,{setTopPos,handleMenu})(Projects);