import React from 'react';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import Login from './components/admin/Login';
import Public from './components/public/Public';
import NotFound from './components/layout/NotFound';

class App extends React.Component {

  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Public}/>
                <Route exact path='/login' component={Login}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
  }
}
export default App;
