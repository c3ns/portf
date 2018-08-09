import React from 'react';

const Footer = (props) => {
    return(
        <footer>
            <p>Copyright © {(new Date()).getFullYear()}</p>
        </footer>
    )
};

export default Footer