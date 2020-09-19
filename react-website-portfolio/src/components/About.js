import React from 'react';

function About() {
    return (
        <div className="about-all">
            <h1>About me</h1>

            <p>I have been focusing on building simple, modern,user friendly design and websites. My favorite part of front end development is to work with a team and build a beautiful interface.</p>

            <p>By all means, I’m a team player and love coding. If you think I’m fit to your company, please keep in touch!</p>

            <div className="about-links">
            <a href="https://www.linkedin.com/in/sachiko-yokoyama-a2172b198/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/sachiko1995" target="_blank"><i class="fab fa-github"></i></a>
            <a href="https://www.facebook.com/sachiko.yokoyama.568" target="_blank"><i class="fab fa-facebook"></i></a>
            <a href=""><i class="fab fa-instagram"></i></a>
            <a href="https://open.spotify.com/user/sachikonovel" target="_blank"><i class="fab fa-spotify"></i></a>
            </div>

        <div className="about-btns">
            <button>Resume</button>
            <button>Send a message</button>
        </div>
        </div>
    )
}

export default About
