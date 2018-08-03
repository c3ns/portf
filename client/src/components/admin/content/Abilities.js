import React from 'react';
import {connect} from 'react-redux';
import {updateAbility} from "../../../actions/experienceAction";

class Abilities extends React.Component{
    state={
        option:0,
        content:'',
    }
    componentDidMount(){
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
        const {option,content} = this.state;
        this.props.updateAbility({title:abilities[option].title, content});
    }

    render(){
        const {option,content} = this.state;
        const options = this.props.abilities.map((ability,i) =>
            <option key={i} value={i}>{ability.title}</option>
        )
        return(
            <div className="abilities">
                <h4>Abilities</h4>
                <form onSubmit={this.onSubmit}>
                    <select
                        name="option"
                        value={option}
                        onChange={this.onSelectChange}
                    >
                        {options}
                    </select>
                    <textarea
                        name="content"
                        value={content}
                        placeholder="content..."
                        onChange={this.onContentChange}
                    />
                    <button>Update</button>
                </form>
            </div>
        )
    }
};

const mapStateToProps = ({experience:{abilities}}) => ({abilities})

export default connect(mapStateToProps,{updateAbility})(Abilities)