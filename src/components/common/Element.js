import React from 'react';
import { connect } from 'react-redux';

const Element = (props) => {
    const {x,y,name,color} = props.elements[props.id];
    const style={
        top: `${y}px`,
        left: `${x}px`
    }
    return(
        <div className={color+' element'} style={style}>{name}</div>
    )
};

const mapStateToProps = (state) => {
    return {
       elements: state.elements
    }
}
export default connect(mapStateToProps)(Element)