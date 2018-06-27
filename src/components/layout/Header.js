import React from 'react';
import {connect} from "react-redux";
import {handleMenu} from '../../actions/menuAction';

const style={
    transition: 'all 0.3s linear'
}

class Header extends React.Component{
    state = {
        mouseEnter: [false,false,false,false,false],
        width: ['0%','0%','0%','0%','0%']
    }

    mouseEnterHandle = (index) => {
        const mouseEnter = this.state.mouseEnter.map((item,i) => i === index && !this.state.mouseEnter[i]);
        const width = this.state.width.map((w,i) => mouseEnter[i]? '100%' : '0%');
        this.setState({mouseEnter,width});
    }

   render(){
       const {list, active} = this.props.menu;
       const menuList = list.map((item,i) => {
           return(
               <li
                   onMouseLeave={() =>  this.mouseEnterHandle(i)}
                   onMouseEnter={() =>  this.mouseEnterHandle(i)}
                   onClick={() => this.props.handleMenu(i)}
                   className={active === i? 'active' : null }
                   key={item}
               >
                   <div className="txt">{item}</div>
                   <div className="upper" style={{...style, width: this.state.width[i]}}></div>
                   <div className="lower" style={{...style, width: this.state.width[i]}}></div>
               </li>
           );
       });

       return(
           <header>
               <div className="menu container">
                   <ul>
                       {menuList}
                   </ul>
               </div>
           </header>
       )
   }
};
const mapStateToProps = (state) => {
    return { menu: state.menu }
};

export default connect(mapStateToProps,{handleMenu})(Header);