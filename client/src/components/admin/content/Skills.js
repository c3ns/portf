import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/experienceAction';
import _ from 'lodash';


class Skills extends React.Component{
    state={
        menu:['new','update'],
        img:'',
        option:0,
        level:0,
        isNew:true
    }
    componentDidMount(){
        if(_.isEmpty(this.props.skills)) return
        const level = this.props.skills[this.state.option].level;
        this.setState({level});
    }
    onSelectChange = (e) => {
        const level = this.props.skills[e.target.value].level;
        this.setState({[e.target.name]:e.target.value,level});
    };
    onInputChange = (e) => this.setState({[e.target.name]:e.target.value});
    onSubmit = (e) => {
        e.preventDefault();
        const {skills} = this.props;
        const {option,level,isNew,img} = this.state;
        isNew
            ? this.props.addSkill({img,level})
            : this.props.updateSkill({...skills[option],level});
    }
    onActiveFormChange = (m) => {
        if(m === 'new')
            this.setState({isNew:true})
        else
            this.setState({isNew:false})
    }
    render(){
        const {option,level,menu,img,isNew} = this.state;
        const options = this.props.skills.map((skill,i) => <option key={i} value={i}>{skill.img}</option> )
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
                <h4>Skills</h4>
                <ul>{list}</ul>
                <form onSubmit={this.onSubmit}>
                    {isNew
                        ? <input
                            type="text"
                            placeholder="img..."
                            name="img"
                            value={img}
                            onChange={this.onInputChange}
                        />
                        : <select
                            name="option"
                            value={option}
                            onChange={this.onSelectChange}
                            >
                            {options}
                        </select>
                    }
                    <input
                        min="0"
                        max="100"
                        type="number"
                        name="level"
                        value={level}
                        onChange={this.onInputChange}
                    />
                    <button>{isNew? 'Add': 'Update'}</button>
                </form>
            </div>
        )
    }
};

const mapStateToProps = ({experience:{skills}}) => ({skills})

export default connect(mapStateToProps,actions)(Skills)