import React from 'react';
import '../stylesheets/Landing.css';
import img from '../images/excitedDoggo.JPG'

function Landing() {
    return (
        <div className="landing-container">
            <div data-aos="fade-right">
                <h1 id="hero-text">Hi<br />     there!</h1>
            </div>
            <div data-aos="fade-left">
                <img src={img} alt="cutest doggo around" id="landing-img" width={500} height={550}/>
            </div>
        </div>
    )
}

export default Landing;