import React from "react";
import { render } from "react-dom";


function AboutMe() {
    return(
        <div>
            <div className="typewriter">
                        <h1>Ana Valdivia</h1>
                </div>
            <p>Hi! I am a full stack developer with understanding of web programming languages, database technologies, and front end design. I have experience with MySQL and MERN stacks, comprised of MongoDB, Express, React and Node.js.</p>
            <p>
                <a href="AnaValdiviaResume (4).pdf" style={{color: "#cc652d"}}>RESUME</a>
                |
                <a href="https://github.com/anabee">
                <span style={{ color:"#cc652d"}}>
                    <i className="fab fa-github"></i>
                </span>
                </a>
                |
                <a href="https://www.linkedin.com/in/ana-valdivia-69ab8b106/">
                <span style={{ color:"#cc652d"}}>
                        <i className="fab fa-linkedin"></i>
                </span></a>
            </p>
            <p>Hawthorne, CA</p>
            <img id="portrait" src="images/Me.jpeg"/>
        </div>
    )
}

export default AboutMe;