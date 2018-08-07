import React from 'react';
import {connect} from "react-redux";
import {handleMenu} from '../../actions/menuAction';
import {logout} from "../../actions/authAction";
import {animateScroll as scroll} from 'react-scroll'
import {Link} from 'react-router-dom'

class Header extends React.Component{
    state = {
        mouseEnter: [false,false,false,false,false],
        width: ['0%','0%','0%','0%','0%'],
        menu:false,
        mobileMenu:false
    }
    componentDidUpdate(){
        const {menu} = this.state;
        (!menu && this.props.posY >100) && this.setState({menu:true});
        (menu && this.props.posY <100) && this.setState({menu:false});
    }

    mouseEnterHandle = (index) => {
        const mouseEnter = this.state.mouseEnter.map((item,i) => i === index && !this.state.mouseEnter[i]);
        const width = this.state.width.map((w,i) => mouseEnter[i]? '100%' : '0%');
        this.setState({mouseEnter,width});
    }
    onMenuClick = (i) => {
        this.props.handleMenu(i);
        scroll.scrollTo(this.props.page.position[i]);
        this.state.mobileMenu && this.setState({mobileMenu:false})
    };
    onMobileClick = () => this.setState({mobileMenu:!this.state.mobileMenu})
    render(){
       const {list, active} = this.props.menu;
       const menuList = list.map((item,i) => {
           return(
               <li
                   onMouseLeave={() =>  this.mouseEnterHandle(i)}
                   onMouseEnter={() =>  this.mouseEnterHandle(i)}
                   onClick={() => this.onMenuClick(i)}
                   className={active === i? 'active' : null }
                   key={item}
               >
                   <div className="txt">{item}</div>
                   <div className="upper" style={{width: this.state.width[i]}}></div>
                   <div className="lower" style={{width: this.state.width[i]}}></div>
               </li>
           );
       });
       return(
           <header>
               {this.props.isAuth
                   && (<div className="admin-navi">
                        <Link key="1" to='/admin'>Admin</Link>
                        <Link key="2" to='/' onClick={this.props.logout}>Logout</Link>
                      </div>)

               }
               <div className={this.state.menu?'menu-opac menu container' : 'menu container'}>
                   <ul>
                       {menuList}
                   </ul>
               </div>
               <i className="fas fa-bars" onClick={this.onMobileClick}/>
               <div className="clearfix"/>
               {this.state.mobileMenu &&
                <div className="mobile-menu">
                    <ul>
                        {menuList}
                    </ul>
               </div>}
           </header>
       )
   }
};
const mapStateToProps = ({menu,page,auth:{isAuth}}) => ({menu,page,isAuth});

export default connect(mapStateToProps,{handleMenu,logout})(Header);