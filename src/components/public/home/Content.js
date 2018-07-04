import React from 'react';
import { connect } from 'react-redux';
import Element from '../../common/Element';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import * as actions from '../../../actions/elementsAction';

class Content extends React.Component{
    state={
        elNames:['const','let','=>','class','{}','&&','[]','return'],
        elColors:['blue','green','white'],
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
        show:'',
    }
    componentWillMount(){
        let i = 0;
        const interval = setInterval(() =>{
            const show = this.state.show + this.state.content[i];
            this.setState({show});

            const name = this.state.elNames[Math.floor(Math.random()*(this.state.elNames.length))];
            const color = this.state.elColors[Math.floor(Math.random()*(this.state.elColors.length))];

            const y = this.refs.underslash.offsetTop;
            const x = this.refs.underslash.offsetLeft;
            i%2===0 && this.props.AddElement({x,y,name,color});

            i++;
            i>= this.state.content.length && clearInterval(interval);
        },50);
    }
    animationEntering = (index) => this.props.ChangeCoords(index,false);
    animationEntered = (index) => this.props.ChangeCoords(index,true);

    render(){
        const elements = this.props.elements.map((el,i) => {
            return(
                <CSSTransition
                    timeout={4000}
                    key={i}
                    classNames="fade"
                    onEntering={() => this.animationEntering(i)}
                    onEntered={() => this.animationEntered(i)}
                    unmountOnExit
                >
                    <Element id={i}/>
                </CSSTransition>
            )
        });
        return(
            <div className="content-left">
                <h2>{this.state.show}<span ref="underslash">_</span></h2>

                <TransitionGroup>
                    {elements}
                </TransitionGroup>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { elements: state.elements }
}

export default connect(mapStateToProps,actions)(Content)