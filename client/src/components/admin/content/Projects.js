import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/projectsAction';

class Projects extends React.Component{
    state={
        _id:'',
        link:'',
        content:'',
        img:'',
        edit:'',
    }
    onChange = (e) => this.setState({[e.target.name]:e.target.value});
    onFormSubmit = (e) => {
        e.preventDefault();
        const project = {...this.state};
        delete project.edit
        this.state.edit
            ? this.props.editProject(project)
            : this.props.addProject(project);
    };
    onEdit = (proj) => {
        const {link,content,_id} = proj;
        this.setState({_id,link,content,edit:true});
    }
    render(){
        const {link,content,edit} = this.state;
        const projects = this.props.projects.map((proj, i) => {
            return (
                <li key={i}>
                    <p>{i+1}. {proj.link}</p>
                    <span onClick={() => this.props.removeProject(i)}>x</span>
                    <span onClick={() => this.onEdit(proj)}>edit</span>
                </li>
            )
        });

        return(
            <div className="projects">
                <h4>Projects</h4>
                <div className="proj-box">
                    {projects}
                </div>
                <form onSubmit={this.onFormSubmit}>
                    <input
                        name="link"
                        type="text"
                        placeholder="Project link..."
                        value={link}
                        onChange={this.onChange}
                    />
                    <textarea
                        name="content"
                        placeholder="Project content..."
                        value={content}
                        onChange={this.onChange}
                    />

                    <button>{edit?'Edit':'Add'} Project</button>
                </form>
            </div>
        )
    }
};

const mapStateToProps = ({projects}) => ({projects})

export default connect(mapStateToProps,actions)(Projects)