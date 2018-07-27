import React from 'react';
import Header from './components/layout/Header';
import Home from './components/public/home/Home';
import Experience from './components/public/experience/Experience';
import Projects from './components/public/projects/Projects';
import Contacts from './components/public/contacts/Contacts';
import ReactDOM from "react-dom";

class App extends React.Component {
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
  render() {
    const {posY} = this.state;
    return (
      <div className="App">
        <Header posY={posY}/>
        <Home/>
        <Experience posY={posY}/>
        <Projects posY={posY}/>
        <Contacts/>
      </div>
    );
  }
}

export default App;
