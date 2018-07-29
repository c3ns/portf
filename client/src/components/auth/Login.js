import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/authAction';

class Login extends React.Component{
    state={
        email:'',
        password:''
    }
    onInputChange = (e) => this.setState({[e.target.name]:e.target.value});
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state,this.props.history);
    };

    render(){
        const {email,password} = this.state;
        return(
            <div className="Login">
                <form onSubmit={this.onFormSubmit}>
                    <input
                        type="text"
                        placeholder="Email..."
                        name="email"
                        value={email}
                        onChange={this.onInputChange}
                    />
                    <input
                        type="password"
                        placeholder="Password..."
                        name="password"
                        value={password}
                        onChange={this.onInputChange}
                    />
                    <button>Log-in</button>
                </form>
            </div>
        )
    }
};

export default connect(null,actions)(Login)