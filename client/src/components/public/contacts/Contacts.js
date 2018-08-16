import React from 'react';
import {connect} from 'react-redux'
import {setTopPos} from "../../../actions/elementsAction";
import {CSSTransition} from "react-transition-group";
import {addLetter} from '../../../actions/mailAction';
import {animateScroll as scroll} from 'react-scroll';
import {isMobile} from 'react-device-detect';

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
        const mail = this.state;
        delete mail.title;
        this.props.addLetter(mail)
        this.setState({...this.state,name:'',email:'',subject:'',message:''});
    }
    scrollTop = () => {
        scroll.scrollTo(0,0);
    }
    render(){
        const {name,email,subject,message} = this.state;
        const {errors} = this.props;
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
                <p className="title">{this.props.contactTitle}</p>
                <form
                    onSubmit={this.onSubmit}
                    className="input-box"
                >
                    <div className="wrapper">
                        <input
                            type="text"
                            name="name"
                            value={name}
                            placeholder="name"
                            onChange={this.onInputChange}
                        />
                        <p className="errors">{errors.name}</p>
                    </div>
                    <div className="wrapper">
                        <input
                            type="text"
                            name="email"
                            value={email}
                            placeholder="email"
                            onChange={this.onInputChange}
                        />
                        <p className="errors">{errors.email}</p>
                    </div>
                    <input
                        type="text"
                        name="subject"
                        value={subject}
                        placeholder="subject"
                        onChange={this.onInputChange}
                    />
                    <p className="errors">{errors.subject}</p>
                    <textarea
                        name="message"
                        placeholder="message"
                        onChange={this.onInputChange}
                        value={message}/>
                    <p className="errors">{errors.message}</p>
                    <button>Send</button>
                </form>

                {isMobile &&
                    <i className="fas fa-angle-up" onClick={this.scrollTop}/>}
            </div>
        )
    }
};

const mapStateToProps = ({page:{contactTitle},errors}) => ({contactTitle,errors})

export default connect(mapStateToProps,{setTopPos,addLetter})(Contacts)