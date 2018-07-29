import React from 'react';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import Login from './components/auth/Login';
import Public from './components/public/Public';
import NotFound from './components/layout/NotFound';
import AdminRoute from './components/auth/PrivateRoute';
import Admin from './components/admin/Admin';
import {connect} from 'react-redux';
import * as actions from './actions/authAction';
import axios from 'axios';
import jwt from 'jsonwebtoken';




class App extends React.Component {
  componentWillMount(){
      const token = localStorage.getItem('portf-token');
      if(!token) return;
      axios.defaults.headers.common['Authorization'] = token;
      const user = jwt.decode(token.split(' ')[1]);
      if(user) this.props.setUser(user);
  }

  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Public}/>
                <Route path='/login' component={Login}/>
                <AdminRoute path='/admin' component={Admin}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
  }
}
export default connect(null,actions)(App);
