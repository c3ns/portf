import React from 'react';
import Header from '../layout/Header';
import Home from './home/Home';
import Experience from './experience/Experience';
import Projects from './projects/Projects';
import Contacts from './contacts/Contacts';

class Public extends React.Component{
    state={
        posY:0
    }
    componentDidMount(){
        window.scrollTo(0,0)
        window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll = () => {
        this.setState({posY:window.pageYOffset})
    }
    render(){
        const {posY} = this.state;
        return(
            <div>
                <Header posY={posY}/>
                <Home/>
                <Experience posY={posY}/>
                <Projects posY={posY}/>
                <Contacts/>
            </div>
        )
    }
}

export default Public