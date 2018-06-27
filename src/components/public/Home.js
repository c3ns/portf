import React from 'react';

class Home extends React.Component{
    state={
        winX: 0,
        winY: 0,
        mouseX:0,
        mouseY:0
    }
    moveHandler = (e) => {
        const { mouseX,mouseY }= this.state;
        const x = mouseX-e.screenX>0? 1 : -1;
        const y = mouseY-e.screenY>0? 1 : -1;
        this.setState({mouseX:e.screenX, mouseY:e.screenY})
         console.log(x,y);
    }
    render(){
        return(
            <div className="home container">
                <div className="content-left">
                    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, qui.</h2>
                </div>
                <div className="content-right">
                    <div className="window">
                        <div onMouseMove={this.moveHandler} className="sample"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home