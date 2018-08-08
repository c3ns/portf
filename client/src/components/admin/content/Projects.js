import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/projectsAction';

class Projects extends React.Component{
    state={
        link:'',
        content:'',
        img:'',
        edit:'',
        title:''
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
    onEdit = (proj) => this.setState({...proj,edit:true});
    render(){
        const {link,content,edit,title} = this.state;
        const projects = this.props.projects.map((proj, i) => {
            return (
                <li key={i}>
                    <p>{i+1}. {proj.title}</p>
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
                        name="title"
                        type="text"
                        placeholder="Project title..."
                        value={title}
                        onChange={this.onChange}
                    />
                    <textarea
                        name="content"
                        placeholder="Project content..."
                        value={content}
                        onChange={this.onChange}
                    />
                    <input
                        name="link"
                        type="text"
                        placeholder="Project link..."
                        value={link}
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