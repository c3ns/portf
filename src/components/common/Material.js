import React from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

class Material extends React.Component{
    state ={
        mat_types:['big','medium','small'],
        quantity:20,
        materials:[],
        mat:false

    }
    componentWillMount(){
        const {mat_types,quantity} = this.state;
        let materials = [];
        for(let i=1;i<=quantity;i++){
            const x = Math.floor(Math.random()*2) === 1? 50 : -50;
            const y = Math.floor(Math.random()*2) === 1? 50 : -50;
            const size = Math.floor(Math.random()*mat_types.length)+1;
            const id = Math.random();
            materials=[...materials,{x,y,size,id}];
        }
        this.setState({materials})
    }

    // animationEntering = (index) => {
    //
    //     const maped= this.state.materials.map((m,i) =>  {
    //        if(index ===i){
    //            m.x+=660;
    //            m.y+=500;
    //        }
    //     });
    //     this.setState({materials:maped})
    //     console.log('asd');
    // }

    render(){

        const{mat_types,materials} = this.state;
        const style = {
            top:500,
            left:660
        }
        const mats = materials.map((m,i) => {
            console.log('asd');
            return(
                <CSSTransition
                    mountOnEnter
                    timeout={4000}
                    key={m.id}
                    onEntering={() => this.animationEntering(i)}
                    classNames="material"
                    unmountOnExit
                >
                    <div style={{top:m.y,left:m.x}} className="material material-big"></div>
                </CSSTransition>
                )

        })
        return(
           <TransitionGroup>
               {mats}
           </TransitionGroup>
        )
    }

};

export default Material