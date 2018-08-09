import React from 'react';
import { connect } from 'react-redux';

const Element = (props) =>  {
    const {elements,id} = props;
    const {x,y,name,color} = elements[id];
    const style={
        top: `${y}px`,
        left: `${x}px`
    }
    return(
        <div
            className={color+' element'}
            style={style}
        >
            {name}
        </div>
    )
};

const mapStateToProps = ({elements}) => ({elements});

export default connect(mapStateToProps)(Element)