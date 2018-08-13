import React from 'react';

const Footer = (props) => {
    return(
        <footer>
            <p>© {(new Date()).getFullYear()} (Beta 0.8.13)</p>
        </footer>
    )
};

export default Footer