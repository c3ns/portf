import React from 'react';

const NotFound = (props) => {
    return(
        <div className="NotFound">
            <div className="wraper">
                <i class="far fa-frown"/>
                <div className="box">
                    <p>404</p>
                    <p>oops!</p>
                    <p>page not found</p>
                </div>
            </div>
        </div>
    )
};

export default NotFound