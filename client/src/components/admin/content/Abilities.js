import React from 'react';
import {connect} from 'react-redux';
import * as actions from "../../../actions/experienceAction";
import _ from 'lodash';

class Abilities extends React.Component{
    state={
        menu:['new','update'],
        option:0,
        title:'',
        content:'',
        isNew:true
    }
    componentDidMount(){
        if(_.isEmpty(this.props.abilities)) return
        const content = this.props.abilities[this.state.option].content;
        this.setState({content});
    }

    onSelectChange = (e) => {
        const content = this.props.abilities[e.target.value].content;
        this.setState({[e.target.name]:e.target.value,content});
    }
    onContentChange = (e) => this.setState({[e.target.name]:e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        const {abilities} = this.props;
        const {option,content,title,isNew} = this.state;
        isNew
            ? this.props.addAbility({title,content})
            : this.props.updateAbility({...abilities[option],content})
    }
    onActiveFormChange = (m) => {
        if(m === 'new')
            this.setState({isNew:true})
        else
            this.setState({isNew:false})
    }
    render(){
        const {option,content,title,menu,isNew} = this.state;
        const options = this.props.abilities.map((ability,i) =>
            <option key={i} value={i}>{ability.title}</option>
        )
        const list = menu.map((m) => {
            return (
                <li
                    key={m}
                    onClick={() => this.onActiveFormChange(m)}>
                    {m}
                </li>
            )
        })
        return(
            <div className="experience">
                <h4>Abilities</h4>
                <ul>{list}</ul>
                <form onSubmit={this.onSubmit}>
                    {isNew
                        ? <input
                            type="text"
                            placeholder="title..."
                            name="title"
                            value={title}
                            onChange={this.onContentChange}
                        />
                        : <select
                            name="option"
                            value={option}
                            onChange={this.onSelectChange}
                        >
                            {options}
                        </select>
                    }
                    <textarea
                        name="content"
                        value={content}
                        placeholder="content..."
                        onChange={this.onContentChange}
                    />
                    <button>{isNew? 'Add': 'Update'}</button>
                </form>
            </div>
        )
    }
};

const mapStateToProps = ({experience:{abilities}}) => ({abilities})

export default connect(mapStateToProps,actions)(Abilities)