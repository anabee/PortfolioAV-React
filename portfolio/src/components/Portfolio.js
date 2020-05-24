import React from "react";
import { render } from "react-dom";


function Portfolio() {
    return(
        <div>
                    
        <div className="row">
            <div className="col">
                <div className="row">
                    <div className="col forcecol">
                        <img className="portfolio-image forceimg" src="https://raw.githubusercontent.com/anabee/portfolio-valdivia/master/images/local-results.png" alt="hangman"/>
                    <div className="overlay">
                            <div className="text">
                                <a href="https://elliotfouts.github.io/local-eats">Local Eats</a>
                            </div>
                    </div>
                    </div>

                    <div className="col forcecol">
                        <img className="portfolio-image forceimg" src="https://raw.githubusercontent.com/anabee/portfolio-valdivia/master/images/Schedule_proj.png" alt="rpg game icons"/>
                    <div className="overlay">
                        <div className="text">
                            <a href="https://anabee.github.io/DailyWorkSchedule/">Daily Schedule</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
<br/>
    
            <div className="row">
                <div className="col forcecol">
                    <img className="portfolio-image" src="images/weTrivia.png" alt="trivia contestants"/>
                <div className="overlay">
                    <div className="text">
                        <a href="https://intense-earth-41726.herokuapp.com/">WeTrivia</a>
                    </div>
                </div>
    </div>
    </div>
    </div>
            
        </div>
    )
}

export default Portfolio;