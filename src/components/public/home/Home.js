import React from 'react';
import HomeWindow from './HomeWindow';
import Content from './Content';

class Home extends React.Component{
    render(){
        return(
            <div className="home container">
                <Content/>
                <HomeWindow/>
            </div>
        )
    }
}

export default Home