import React from 'react';

const Ability = (props) => {
    const {show,title} = props.data;
    return(
        <div className={show? 'img-box img-box-active': 'img-box'}>
            <img src={`http://localhost:3000/img/ability/${title}.svg`} alt=""/>
            <h4>{title}</h4>
        </div>
    )
};

export default Ability