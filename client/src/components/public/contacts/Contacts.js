import React from 'react';
import {connect} from 'react-redux'
import {setTopPos} from "../../../actions/elementsAction";
import {CSSTransition} from "react-transition-group";

class Contacts extends React.Component {
    state={
        name:'',
        email:'',
        subject:'',
        message:'',
        title:false
    }
    componentDidMount(){
        this.props.setTopPos(this.refs.contacts.offsetTop);
    }
    componentDidUpdate(){
        const {posY} = this.props;
        if(!this.state.title && posY > this.refs.contacts.offsetTop - window.innerHeight+200) this.setState({title:true});
        if(this.state.title && posY < this.refs.contacts.offsetTop - window.innerHeight+200) this.setState({title:false});
    }
    onInputChange = (e) => this.setState({[e.target.name]: e.target.value});
    onSubmit = (e) => {
        e.preventDefault();
    }
    render(){
        const {name,email,subject,message} = this.state;
        return(
            <div ref="contacts" className="Contacts container">
                <CSSTransition
                    in={this.state.title}
                    key="h2"
                    classNames="h2"
                    timeout={300}
                >
                    <h2>Contacts</h2>
                </CSSTransition>
                <p>{this.props.contactTitle}</p>
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

const mapStateToProps = ({page:{contactTitle}}) => ({contactTitle})

export default connect(mapStateToProps,{setTopPos})(Contacts)