import React from 'react';
import '../Stylesheets/Bio.css';

function Bio() {
    return (
        <div>
            <h2> I'm Ashley and I love art
                <span role="img" aria-label="jsx-a11y/accessible-emoji"> 👩‍🎨</span></h2>
            <p id="bio"> Inspired by my chigi Lela, Log Dog Ink began Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et ore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum. </p>
            <p id="contact"> For questions, comments, or commission inquiries, please
                email me at <a href="mailto:logdogink@gmail.com">logdogink@gmail.com</a>!</p>
        </div>
    )
}

export default Bio;