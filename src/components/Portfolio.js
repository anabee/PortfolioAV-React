import React from "react";
import "./style.css"



function Portfolio() {
    return(
        <div className="portfolio">
                    
                    <div className="row">
                    <div className="col 1a forcecol">
                            <img className="portfolio-image forceimg" src="https://raw.githubusercontent.com/anabee/portfolio-valdivia/master/images/local-results.png" alt="hangman"/>
                            <div className="overlay">
                                <div className="text">
                                        <button type="button" className="btn btn-info btn-lg modalBtn" data-toggle="modal" data-target="#localeatsModal">Local Eats</button>
                                </div>
                            </div>

                            <div id="localeatsModal" className="modal fade" role="dialog">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                                <h4 className="modal-title">Local Eats</h4>
                                        </div>
                                        <div className="modal-body">
                                            <p>Local Eats was founded in 2020 by four UCLA Extension bootcamp students to help people find local restaurants. In addition to finding new restaurants, you can use Local Eats to find everything you need to know about the restaurant including the caliber, average cost for two, phone number, and more! You can also find suggested nearby restaurants.</p>
                        
                                            <p>Server-side APIs used: Google Maps & Zomato</p>
                                            
                                            <p>CSS Framework: Skeleton</p>
                        
                                            <p>Visit: <a href="https://elliotfouts.github.io/local-eats">Local Eats</a></p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="col 1b forcecol">
                            <img className="portfolio-image forceimg" src="https://raw.githubusercontent.com/anabee/portfolio-valdivia/master/images/Schedule_proj.png" alt="rpg game icons"/>
                            <div className="overlay">
                                <div className="text">
                                    <button type="button" className="btn btn-info btn-lg modalBtn" data-toggle="modal" data-target="#dailySchedModal">Daily Work Schedule</button>
                                </div>
                            </div>

                            <div id="dailySchedModal" className="modal fade" role="dialog">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h4 className="modal-title">Daily Schedule</h4>
                                        </div>
                                        <div className="modal-body">
                                            <p>A simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.</p>
                                                            
                                            <p>CSS Framework: Bootstrap</p>
                                                
                                            <p>Visit: <a href="https://anabee.github.io/DailyWorkSchedule/">Daily Schedule</a></p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col 1c forcecol">
                            <img className="portfolio-image" src="images/weTrivia.png" alt="trivia contestants"/>
                            <div className="overlay">
                                <div className="text">
                                    <button type="button" className="btn btn-info btn-lg modalBtn" data-toggle="modal" data-target="#weTriviaModal">WeTrivia</button>
                                </div>
                            </div>

                            <div id="weTriviaModal" className="modal fade" role="dialog">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h4 className="modal-title">WeTrivia</h4>
                                        </div>
                                        <div className="modal-body">
                                            <p>WeTrivia is a fun, fast-paced trivia competition for you and your friends to test your knowledge in a variety of interesting subjects. Challenge other players to beat your high score, and share your experiences using an innovative chat feature as you play.</p>
                                            
                                            <p>Server-side APIs used: Open Trivia</p>
                                            
                                            <p>CSS Framework: Bulma</p>
                        
                                            <p>Visit: <a href="https://intense-earth-41726.herokuapp.com/">WeTrivia</a></p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="col 1d forcecol">
                            <img className="portfolio-image forceimg" src="https://raw.githubusercontent.com/anabee/portfolio-valdivia/master/images/local-results.png" alt="hangman"/>
                            <div className="overlay">
                                <div className="text">
                                        <button type="button" className="btn btn-info btn-lg modalBtn" data-toggle="modal" data-target="#localeatsModal">Local Eats</button>
                                </div>
                            </div>
                    </div>
                </div>

        </div>
    )
}

export default Portfolio;