import React from 'react';
import wind from '../../common/wind.png';
import Element from '../common/Element';



class Home extends React.Component{
    state={
        window: {
            winX: -130,
            winY: -130,
            mouseX:0,
            mouseY:0,
        },
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
        show:'',
        elements:[
        ]
    }
    componentDidMount(){
        let i = 0;
        const interval = setInterval(() =>{
            const show = this.state.show + this.state.content[i];
            const y = this.refs.underslash.offsetTop;
            const x = this.refs.underslash.offsetLeft
            console.log(x);
            i%2==0 && this.setState({elements: [...this.state.elements,{x,y}]})
            this.setState({show});
            i++;
            i>= this.state.content.length && clearInterval(interval);
        },50);
    }
    moveHandler = (e) => {
        let {mouseX,mouseY,winX,winY} = this.state.window;
        const x = mouseX-e.screenX;
        const y = mouseY-e.screenY;
        winX+=x; winY+=y;

        winX>= 0? winX=0 : null;
        winX<=-130? winX = -130 : null;

        winY>= 0? winY=0 : null;
        winY<=-130? winY=-130 : null

        this.setState({window:{mouseX:e.screenX, mouseY:e.screenY, winX, winY}})
    }
    render(){
        const {winX, winY} = this.state.window;
        const style={
            transform: `translate(${winX}px, ${winY}px)`,
        }
        const elements = this.state.elements.map((el,i) => <Element key={i} el={el}/> )
        return(
            <div onMouseMove={this.moveHandler} className="home container">
                <div className="content-left">
                    <h2>{this.state.show}<span ref="underslash">_</span></h2>
                    {elements}
                </div>
                <div className="content-right">
                    <div className="window-border">
                        <div className="window">
                            <img style={style} src={wind} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home