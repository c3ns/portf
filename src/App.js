import React from 'react';
import Header from './components/layout/Header';
import Home from './components/public/home/Home';
import About from './components/public/about/About';
import Experience from './components/public/experience/Experience';
import Projects from './components/public/projects/Projects';
import Contacts from './components/public/contacts/Contacts';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Home/>
        <About/>
        <Experience/>
        <Projects/>
        <Contacts/>
      </div>
    );
  }
}

export default App;
