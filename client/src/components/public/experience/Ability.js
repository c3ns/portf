import React from 'react';
import {CSSTransition} from 'react-transition-group'

class Ability extends React.Component{
    state={
        show:false
    }
    onMouseHandle = (show) => this.setState({show})

    render(){
        const {title,content} = this.props.data;
        const {show} = this.state;
        return(
            <CSSTransition
                in={show}
                key={title}
                classNames="ability"
                timeout={400}
            >
                <div
                    className="wrapper "
                    onMouseEnter={() => this.onMouseHandle(true)}
                    onMouseLeave={() => this.onMouseHandle(false)}
                    onTouchStart={() => this.onMouseHandle(!show)}
                >
                    <div className={show? 'img-box img-box-active': 'img-box'}>
                        <img src={`/ability/${title}.svg`} alt=""/>
                        <h4>{title}</h4>
                    </div>
                    {show && <div className="content"><p>{content}</p></div>}
                </div>
            </CSSTransition>

        )
    }
};

export default Ability