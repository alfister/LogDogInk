import React from 'react';
import '../stylesheets/Bio.css';

function Bio() {
    return (
        <div data-aos="fade-up" >
            <h2> I'm Ashley and I love art! <span role="img" aria-label="jsx-a11y/accessible-emoji"> 👩‍🎨</span></h2>
            <div id="bio"> Inspired by Lela, my beloved Chigi (Chihuahua-Corgi mix), Log Dog Ink began as a small
                RedBubble shop I used to get my art out into the world. I like experimenting with different mediums
                and canvasses, watercolor and a digital drawing pad being some of my favorites (but not together of
                course). I'm always looking to improve my skills as an artist and creative person, so if you have any
                feedback or suggestions regarding my work, feel free to let me know! </div>
            <p id="contact"> For questions, comments, or commission inquiries, please
                email me at <a href="mailto:logdogink@gmail.com">logdogink@gmail.com</a>!</p>
        </div>
    )
}

export default Bio;