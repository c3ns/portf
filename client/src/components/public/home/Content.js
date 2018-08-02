import React from 'react';
import { connect } from 'react-redux';
import Element from '../../common/Element';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import * as actions from '../../../actions/elementsAction';

class Content extends React.Component{
    state={
        elNames:['const','let','=>','class','{}','&&','[]','return'],
        elColors:['blue','green','white'],
        show_content:'',
        showEl:true,
    }
    componentWillMount(){
        const {elNames,elColors} = this.state;
        const {home} = this.props;
        let i = 0;
        const interval = setInterval(() =>{
            const show_content = [...this.state.show_content,home[i]];
            this.setState({show_content});

            const name = elNames[Math.floor(Math.random()*(elNames.length))];
            const color = elColors[Math.floor(Math.random()*(elColors.length))];

            const y = this.refs.underslash.offsetTop;
            const x = this.refs.underslash.offsetLeft;
            i%2===0 && this.props.AddElement({id:Math.random(),x,y,name,color,show:true});

            i++;
            i>= home.length && clearInterval(interval);
        },50);
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({showEl:false})
        },7000)
    }
    animationEntering = (index) => this.props.ChangeCoords(index,false);
    animationEntered = (index) => this.props.ChangeCoords(index,true);

    render(){
        const {showEl, show_content} = this.state;
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
            </div>
        )
    }
}
const mapStateToProps = ({elements,page:{home}}) => ({elements,home});

export default connect(mapStateToProps,actions)(Content)