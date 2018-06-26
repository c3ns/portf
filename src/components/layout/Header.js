import React from 'react';
import {connect} from "react-redux";
import {handleMenu} from '../../actions/menuAction';

class Header extends React.Component{

    handleMouse = () => console.log('asdas');

   render(){
       const {list, active} = this.props.menu;
       const menuList = list.map((item,i) => {
           return(
               <li
                   onMouseEnter={this.handleMouse}
                   onClick={() => this.props.handleMenu(i)}
                   className={active === i? 'active' : null }
                   key={item}

               >
                   {item}
                   <div className="upper"></div>
                   <div className="lower"></div>
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