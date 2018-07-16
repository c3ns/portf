import ReactDOM from 'react-dom';
import React from 'react';
import { connect } from 'react-redux';
import Material from './Material';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Element extends React.Component{

    render(){



       // const mater = this.addMaterials
        const {x,y,name,color,show} = this.props.elements[this.props.id];

        const style={
            top: `${y}px`,
            left: `${x}px`
        }
        // !show && console.log(show);
        return(
            <div
                className={color+' element'}
                style={style}
            >
                {name}
            </div>
            //<div className={color+' element'} style={style}>{name}</div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
       elements: state.elements
    }
}
export default connect(mapStateToProps)(Element)