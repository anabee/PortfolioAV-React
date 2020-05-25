import React from "react";
import "./style.css"



function AboutMe() {
    return(
        <div className="about">
            <div className="typewriter">
                        <h1>Ana Valdivia</h1>
                </div>
            <p>Hi! I am a full stack developer with understanding of web programming languages, database technologies, and front end design. I have experience with MySQL and MERN stacks, comprised of MongoDB, Express, React and Node.js.</p>
            <p>
                <a href="AnaValdiviaResume.pdf" style={{color: "#cc652d"}}>RESUME</a>
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
            
            <img id="portrait" className="portrait" src="images/Me.jpeg"/>

            {/* <br></br>
            <br></br>
            <br></br> */}
            
        </div>
    )
}

export default AboutMe;