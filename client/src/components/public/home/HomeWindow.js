import React from 'react';
import wind from '../../../common/wind.jpg';

class HomeWindow extends React.Component{
    state={
        window: {
            winX: -130,
            winY: -130,
            mouseX:0,
            mouseY:0,
        },
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

        return(
            <div onMouseMove={this.moveHandler} className="content-right">
                <div className="window-border">
                    <div className="window">
                        <img style={style} src={wind} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeWindow