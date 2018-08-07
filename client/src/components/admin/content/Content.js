import React from 'react';
import {connect} from 'react-redux';
import {updateContent} from '../../../actions/pageActions';

class Content extends React.Component{
    state={
        titles:['home','contacts'],
        active:0,
        content:'',
        db:['homeTitle','contactTitle']
    };
    componentDidMount(){
        const {page} = this.props;
        const {db,active} = this.state;
        this.setState({content:page[db[active]]});
    };
    onActiveFormChange = (active) => {
        const {page} = this.props;
        const {db} = this.state;
        this.setState({active,content:page[db[active]]});
    };
    onChange = (e) => this.setState({content:e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        const {content,active,db}= this.state;
        this.props.updateContent({title:db[active],content});
    }
    render(){
        const {titles,active,content} = this.state;
        const list = titles.map((title,i) => {
            return (
                <li
                    key={i}
                    onClick={() => this.onActiveFormChange(i)}>
                    {title}
                </li>
            )
        })
        return(
            <div className="home-contacts">
                <h4>Content</h4>
                <ul>{list}</ul>
                <h5>{titles[active]}</h5>
                <form onSubmit={this.onSubmit}>
                    <textarea
                        name="content"
                        placeholder={`${titles[active]} content...`}
                        value={content}
                        onChange={this.onChange}
                    />
                        <button>Update</button>
                </form>
            </div>
        )
    }
};
const mapStateToProps = ({page}) => ({page});

export default connect(mapStateToProps,{updateContent})(Content)