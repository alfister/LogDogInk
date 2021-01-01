import React from 'react';
import '../stylesheets/WTPromo.css';

import ls from '../images/Love\'sSurvival.png';
import iml from '../images/InMyLife.png';


function WTPromo() {
    return (
        <div id="webtoon-container">
            <h2> Also, check me out on Webtoon! </h2>
            <div id="webtoon-grid">
                <div className="wt-overview" data-aos="zoom-in">
                    <div><img src={ls} className="webtoon-img" alt="Love's Survival logo on Webtoon"/></div>
                    <div><h3> Love's Survival </h3>
                    <p> Akili, the princess of an African tribe, lives a normal life
                        until a plane crashes near her tribe, carrying a mysterious man. </p>
                    <a href="https://www.webtoons.com/en/challenge/loves-survival/list?title_no=301359">Read me</a></div>
                </div>
                <div className="wt-overview" data-aos="zoom-in">
                    <div><img src={iml} className="webtoon-img" alt="In My Life logo on Webtoon"/></div>
                    <div><h3> In My Life </h3>
                    <p> Little doodley bits of my little doodley life. </p>
                    <a href="https://www.webtoons.com/en/challenge/in-my-life/list?title_no=534634">Read me</a></div>
                </div>
            </div>
        </div>
    )
}

export default WTPromo;