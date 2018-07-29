import React from 'react';
import { connect } from 'react-redux';

class Element extends React.Component{
    render(){
        const {x,y,name,color} = this.props.elements[this.props.id];
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
    }
};

const mapStateToProps = (state) => {
    return {
       elements: state.elements
    }
}
export default connect(mapStateToProps)(Element)