import React from 'react';
import {Route} from 'react-router-dom';
import AdminMenu from '../layout/AdminMenu';
import Abilities from './content/Abilities';
import Content from './content/Content';
import Projects from './content/Projects';
import Skills from './content/Skills';
import Settings from './content/Settings';
import {connect} from 'react-redux';
import {logout} from '../../actions/authAction';

class Admin extends React.Component{
    render(){
        return(
            <div className="Admin container">
                <AdminMenu logout={this.props.logout}/>
                <div className="admin-content">
                    <Route path="/admin/abilities" component={Abilities}/>
                    <Route path="/admin/skills" component={Skills}/>
                    <Route path="/admin/projects" component={Projects}/>
                    <Route path="/admin/content" component={Content}/>
                    <Route path="/admin/settings" component={Settings}/>
                </div>
                <div className="clearfix"/>
            </div>
        )
    }
}

export default connect(null,{logout})(Admin)