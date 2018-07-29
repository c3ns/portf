import React from 'react';
import {connect} from 'react-redux'
import {setTopPos} from "../../../actions/elementsAction";

class Contacts extends React.Component {
    state={
        name:'',
        email:'',
        subject:'',
        message:'',
    }
    componentDidMount(){
        this.props.setTopPos(this.refs.contacts.offsetTop);
    }
    onInputChange = (e) => this.setState({[e.target.name]: e.target.value});
    onSubmit = (e) => {
        e.preventDefault();
    }
    render(){
        const {name,email,subject,message} = this.state;
        return(
            <div ref="contacts" className="Contacts container">
                <h2>Contacts</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, hic optio <span>email@email.com</span> qui quod sequi voluptatibus.</p>
                <form
                    onSubmit={this.onSubmit}
                    className="input-box"
                >
                    <input
                        type="text"
                        name="name"
                        value={name}
                        placeholder="name"
                        onChange={this.onInputChange}
                    />
                    <input
                        type="text"
                        name="email"
                        value={email}
                        placeholder="email"
                        onChange={this.onInputChange}
                    />
                    <input
                        type="text"
                        name="subject"
                        value={subject}
                        placeholder="subject"
                        onChange={this.onInputChange}
                    />
                    <textarea
                        name="message"
                        placeholder="message"
                        onChange={this.onInputChange}
                        value={message}/>
                    <button>Send</button>
                </form>
            </div>
        )
    }
};

export default connect(null,{setTopPos})(Contacts)