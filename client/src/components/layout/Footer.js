import React from 'react';

const Footer = (props) => {
    return(
        <footer>
            <div className="container">
                <div className="wrapper">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/ernestas-radzvilas"
                    >
                        <i className="fab fa-linkedin"/>
                    </a>
                    <p>View my Linkedin profile</p>
                </div>
                <div className="wrapper">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/c3ns/"
                    >
                        <i className="fab fa-github-square"/>
                    </a>
                    <p>View my GitHub</p>
                </div>
                <div className="clearfix"/>
            </div>
            <p>© {(new Date()).getFullYear()}</p>
        </footer>
    )
};

export default Footer