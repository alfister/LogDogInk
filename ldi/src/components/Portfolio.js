import React from 'react';
import '../stylesheets/Portfolio.css';

import birdImg from '../images/bird-scissors.jpg';
import treeImg from '../images/tree.jpg';
import manImg from '../images/man.jpg';
import mtnImg from '../images/mountain.jpg';
import goatImg from '../images/goat.jpg';
import dogImg from '../images/dog.jpg';
import poachImg from '../images/poachers.jpg';
import chiImg from '../images/chicago.jpg';
import catFamImg from '../images/catFamily.png';
import bellyImg from '../images/LelaBellyRub.png';
import llamaImg from '../images/Llama.png';
import shibaImg from '../images/ShibaInu.png';

function Portfolio() {
    return (
        <div id="portfolio-container">
            <h2> Portfolio </h2>

            <div className="flex-row">
                <div className="column" data-aos="zoom-in">
                    <img src={birdImg} alt="scissor <--> bird"/>
                    <img src={treeImg} alt="a lake with a secret"/>
                    <img src={llamaImg} alt="white llama"/>
                </div>
                <div className="column" data-aos="zoom-in" data-aos-delay="350">
                    <img src={mtnImg} alt="beautiful day in a valley"/>
                    <img src={bellyImg} alt="doggo waiting for belly rub"/>
                    <img src={goatImg} alt="outraged goat"/>
                </div>
                <div className="column" data-aos="zoom-in" data-aos-delay="500">
                    <img src={manImg} alt="man from Joseon dynasty"/>
                    <img src={dogImg} alt="sleepy dog"/>
                    <img src={chiImg} alt="Chicago bean"/>
                </div>
                <div className="column" data-aos="zoom-in" data-aos-delay="650">
                    <img src={shibaImg} alt="smiling Shiba Inu"/>
                    <img src={poachImg} alt="elephants in danger"/>
                    <img src={catFamImg} alt="cat family"/>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;