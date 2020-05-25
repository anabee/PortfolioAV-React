import React from "react";
import "./style.css"

function Footer(){
    return(
        <div>
            <footer>
                <div>
                    <span>
                        <div>
                            <a href="https://github.com/anabee">
                            <i className="fab fa-github-square fa-2x"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/ana-valdivia-69ab8b106/">
                            <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                        </div>
                        <div>
                        © Ana Valdivia
                        </div>
                    </span>
                </div>
            </footer>
        </div>
    )
}

export default Footer;