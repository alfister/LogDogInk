import React from 'react';
import '../stylesheets/Landing.css';
import img from '../images/excitedDoggo.JPG'

function Landing() {
    return (
        <div className="landing-container">
            <h1 id="hero-text">Hi<br />     there!</h1>
            <img src={img} alt="cutest doggo around" id="landing-img" width={500} height={550}/>
        </div>
    )
}

export default Landing;