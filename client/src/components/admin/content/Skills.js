import React from 'react';
import {connect} from 'react-redux';
import {updateSkill} from '../../../actions/experienceAction';


class Skills extends React.Component{
    state={
        option:0,
        perc:0,
    }
    componentDidMount(){
        const perc = this.props.skills[this.state.option].level;
        this.setState({perc});
    }
    onSelectChange = (e) => {
        const perc = this.props.skills[e.target.value].level;
        this.setState({[e.target.name]:e.target.value,perc});
    };
    onInputChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit = (e) => {
        e.preventDefault();
        const {skills} = this.props;
        const {option,perc} = this.state;
        this.props.updateSkill({img:skills[option].img,level:perc});
    }
    render(){
        const {option,perc} = this.state;
        const options = this.props.skills.map((skill,i) => <option key={i} value={i}>{skill.img}</option> )
        return(
            <div className="skills">
                <h4>Skills</h4>
                <form onSubmit={this.onSubmit}>
                    <select
                        name="option"
                        value={option}
                        onChange={this.onSelectChange}
                    >
                        {options}
                    </select>
                    <input
                        min="0"
                        max="100"
                        type="number"
                        name="perc"
                        value={perc}
                        onChange={this.onInputChange}
                    />
                    <button>Update</button>
                </form>
            </div>
        )
    }
};

const mapStateToProps = ({experience:{skills}}) => ({skills})

export default connect(mapStateToProps,{updateSkill})(Skills)