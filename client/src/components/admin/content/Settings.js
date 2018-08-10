import React from 'react';
import axios from "axios/index";
import jwt from "jsonwebtoken";
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../../actions/authAction';

class Settings extends React.Component{
    state={
        pass:'',
        newPass:'',
        rNewPass:''
    }
    onInputChange = (e) => this.setState({[e.target.name]:e.target.value})

    onFormChange = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('portf-token');
        const user = jwt.decode(token.split(' ')[1]);
        await axios.post('/api/changepass', {...this.state,email:user.email});
        this.props.logout();
        this.props.history.push('/login');
    }

    render(){
        const {pass,newPass,rNewPass} = this.state;
        return(
            <div className="Settings">
                <h4>Settings</h4>
                <form onSubmit={this.onFormChange}>
                    <input
                        type="password"
                        placeholder="old password..."
                        name="pass"
                        value={pass}
                        onChange={this.onInputChange}
                    />
                    <input
                        type="password"
                        placeholder="new password..."
                        name="newPass"
                        value={newPass}
                        onChange={this.onInputChange}
                    />

                    <input
                        type="password"
                        placeholder="repeat new password..."
                        name="rNewPass"
                        value={rNewPass}
                        onChange={this.onInputChange}
                    />
                    <button>Change</button>
                </form>
            </div>
        )
    }
};

export default connect(null,{logout})(Settings)