import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const AdminRoute = ({component: Admin,auth, ...rest}) => (
    <Route {...rest} render={(props) =>
        auth.isAdmin
            ? (<Admin {...props}/>)
            : (<Redirect to='/'/>)
    }/>
);

const mapStateToProps = ({auth}) => ({auth}) ;

export default connect(mapStateToProps)(AdminRoute);