import React from 'react';
import HomeWindow from './HomeWindow';
import Content from './Content';
import {handleMenu} from "../../../actions/menuAction";
import {connect} from 'react-redux';

class Home extends React.Component{
    componentDidUpdate(){
        const {posY} = this.props;
        if(posY < 500) this.props.handleMenu(0);
    }
    render(){
        return(
            <div className="home container">
                <div className="box">
                    <Content/>
                    <HomeWindow/>
                </div>
            </div>
        )
    };
};

export default connect(null,{handleMenu})(Home)