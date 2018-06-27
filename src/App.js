import React from 'react';
import Header from './components/layout/Header';
import Home from './components/public/Home';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Home/>
      </div>
    );
  }
}

export default App;
