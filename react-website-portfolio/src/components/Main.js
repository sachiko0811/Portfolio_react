import React from 'react';
import photo from '../images/sachiko_photo2.png';

import About from '../components/About';

function Main() {
    return (
        <>
            <p>I'm SACHIKO.</p>
            <p>Front-End developer</p>
            <p>Based in Vancouver.</p>

            <img src={photo} />

            <About />
        </>
    )
}

export default Main
