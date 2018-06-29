import React from 'react';
import CSSTransition from 'react-transition-group';

const Element = (props) => {
    const {x,y} = props.el;
    const style={
        top: `${y}px`,
        left: `${x}px`
    }
    return(

        <div className="element" style={style}>Element</div>

    )
};

export default Element