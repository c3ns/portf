import React from 'react';
import {NavLink, Link} from 'react-router-dom';



class AdminMenu extends React.Component{
    state={
        menuItems:[
            {
                category:'abilities',
                link:'/admin/abilities'
            },
            {
                category:'skills',
                link:'/admin/skills'
            },
            {
                category:'projects',
                link:'/admin/projects'
            },
            {
                category:'content',
                link:'/admin/content'
            },
            {
                category:'settings',
                link:'/admin/settings'
            }
        ]
    }
    render(){
        const menuItems= this.state.menuItems.map((item,i) =>
            <li key={i}>
                <NavLink
                    to={item.link}
                    key={i}
                    activeClassName="active"
                >
                    {item.category}
                </NavLink>
            </li>
        )
        return(
            <nav>
                <Link className="home-link" to="/">home</Link>
                {menuItems}
                <Link className="logout-link" to="/" onClick={this.props.logout}>Logout</Link>
            </nav>
        )
    }
};

export default AdminMenu;