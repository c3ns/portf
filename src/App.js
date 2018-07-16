import React from 'react';
import Header from './components/layout/Header';
import Home from './components/public/home/Home';
import Experience from './components/public/experience/Experience';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Home/>
        <Experience/>
      </div>
    );
  }
}

export default App;
