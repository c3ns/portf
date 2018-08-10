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
import {fetchProjects} from "./actions/projectsAction";
import {fetchExperience} from "./actions/experienceAction";
import {fetchContent} from "./actions/pageActions";
import Spinner from "./components/common/Spinner";


class App extends React.Component {
  state={
      loading:true
  }
  async componentWillMount(){
      await Promise.all([
          this.props.fetchProjects(),
          this.props.fetchExperience(),
          this.props.fetchContent()]);

      this.setState({loading:false});
      const token = localStorage.getItem('portf-token');
      if(!token) return;
      axios.defaults.headers.common['Authorization'] = token;
      const user = jwt.decode(token.split(' ')[1]);
      if(user) this.props.setUser(user);
  }

  render() {
    const {loading} = this.state;
    return (
        loading? <Spinner/> :
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

const mapStateToProps = ({projects,page:{filled},experience}) => ({filled,projects,experience})

export default connect(mapStateToProps,{...actions,fetchProjects,fetchExperience,fetchContent})(App);
