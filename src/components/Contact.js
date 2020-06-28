import React from "react";
import "./style.css"


function Contact() {
    return(
        <div className="contact">
            <div>
            <p>Email me at ana.valdivia112@gmail.com, or use the form below!</p>
            </div>
            <form>
            <div className="contact">
                <div className="input-group mb-3">
                    <label>Name
                    <input id="nameInput" type="text" size="40" className="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1"/>
                    </label>
                </div>
    
                <div className="input-group mb-3">
                    <label>Email
                    <input id="emailInput" type="text" size="40" className="form-control" placeholder="email@gmail.com" aria-label="Username" aria-describedby="basic-addon1"/>
                    </label>
                </div>
    
                <div className="input-group">
                    <label>Message
                    <textarea id="textInput" className="form-control" cols="40" rows="10" placeholder="Hi!" aria-label="With textarea"></textarea>
                    </label>
                </div>
                
                <button type="submit" className="btn btn-info buttonstyle">Submit</button>
            </div>
        </form>
        </div>
    )
}

export default Contact;