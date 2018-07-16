import React from 'react';
import { connect } from 'react-redux';
import Element from '../../common/Element';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import * as actions from '../../../actions/elementsAction';
import Material from "../../common/Material";

class Content extends React.Component{
    state={
        elNames:['const','let','=>','class','{}','&&','[]','return'],
        elColors:['blue','green','white'],
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
        show_content:'',
        showEl:true,
        materialShow:false
    }
    componentWillMount(){
        const {content,elNames,elColors} = this.state;
        let i = 0;
        const interval = setInterval(() =>{
            const show_content = this.state.show_content + this.state.content[i];
            this.setState({show_content});

            const name = this.state.elNames[Math.floor(Math.random()*(this.state.elNames.length))];
            const color = this.state.elColors[Math.floor(Math.random()*(this.state.elColors.length))];

            const y = this.refs.underslash.offsetTop;
            const x = this.refs.underslash.offsetLeft;
            i%2===0 && this.props.AddElement({id:Math.random(),x,y,name,color,show:true});

            i++;
            i>= this.state.content.length && clearInterval(interval);
        },50);
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({showEl:false})
        },8500)
    }
    animationEntering = (index) => this.props.ChangeCoords(index,false);
    animationEntered = (index) => {
        this.props.ChangeCoords(index,true);
    };

    render(){

        const {showEl, show_content} = this.state;
        // const materials = this.props.elements.map((el,i) => {
        //     return(
        //         !el.show &&
        //         <Material key={i}/>
        //     )
        //
        // });
        const elements = this.props.elements.map((el,i) => {
            return(
                showEl &&
                    <CSSTransition
                        mountOnEnter
                        timeout={4000}
                        key={el.id}
                        classNames="fade"
                        onEntering={() => this.animationEntering(i)}
                        onEntered={() => this.animationEntered(i)}
                        unmountOnExit
                    >
                        <Element key={el.id} id={i}/>

                    </CSSTransition>
            )
        });
        return(
            <div className="content-left">
                <h2>{show_content}<span ref="underslash">_</span></h2>

                <TransitionGroup>
                    {elements}
                </TransitionGroup>

                {!this.state.materialShow && <Material/>}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { elements: state.elements}
}

export default connect(mapStateToProps,actions)(Content)