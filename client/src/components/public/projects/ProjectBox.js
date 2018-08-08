import React from 'react';
import {CSSTransition} from 'react-transition-group';

class ProjectBox extends React.Component{
    state={
        show:false
    }
    onMouseHandle = (show) => this.setState({show});
    render(){
        const {show} = this.state;
        const {content,title,link} = this.props.project;
        return(
            <div
                onMouseEnter={() => this.onMouseHandle(true)}
                onMouseLeave={() => this.onMouseHandle(false)}
                onTouchStart={() => this.onMouseHandle(true)}
                className="proj-box"
            >
                <CSSTransition
                    key="btn"
                    in={show}
                    timeout={300}
                    classNames="btn"
                >
                    <a className="btn" href={link}>{title}</a>
                </CSSTransition>
                <CSSTransition
                    key="content"
                    in={show}
                    timeout={300}
                    classNames="content"
                >
                    <div className="content">
                        <p>{content}</p>
                    </div>
                </CSSTransition>
            </div>
        )
    }
}

export default ProjectBox