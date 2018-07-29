import React from 'react';
import {CSSTransition} from 'react-transition-group';

class ProjectBox extends React.Component{
    state={
        show:false
    }
    onMouseHandle = (show) => this.setState({show});
    render(){
        const {show} = this.state;
        const {content} = this.props.project;
        return(
            <div
                onMouseEnter={() => this.onMouseHandle(true)}
                onMouseLeave={() => this.onMouseHandle(false)}
                className="proj-box"
            >
                <CSSTransition
                    in={show}
                    timeout={300}
                    classNames="btn"
                >
                    <div className="btn">Link</div>
                </CSSTransition>
                <CSSTransition
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