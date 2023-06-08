import React from "react";
import "./Contact.css";

import linkedin from "../../resources/linkedin_white.png"
import github from "../../resources/github.png"
import email from "../../resources/mail.png"


function Contact() {
    return (
        <div className="contact" id = "contact">
            <div className="ctitle title">
                CONTACT ME
                <div className="cunderline underline"></div>
            </div>

        <div className="cdata">
            <div className="cformholder">
            <form className="cform" action="https://formsubmit.co/3785c230423a4b0e51cfce60c0c2ce39" method="POST">

            <div className="nameinput">
            <label htmlFor="fname" className="inholder">
                <input type="text" id="fname" className="in fname" name = 'first name 'required />
                <div className="label">First Name</div>
              </label>

              <label htmlFor="lname" className="inholder">
                <input type="text" id="lname" className="in lname" name = 'last name' required/>
                <div className="label">Last Name</div>
              </label>
            </div>

              <label htmlFor="email" className="inholder">
                <input type="email" id="email" className="in email" required name = 'email'/>
                <div className="label">Email</div>
              </label>

              <label htmlFor="comments" className="inholder in-textarea">
                <textarea id="comments" className="in comments" required name = 'comments' placeholder="Message"/>
              </label>

              <button type="submit" className="submit">
                Submit
              </button>
            </form>
            </div>

            <div className="cinfo">
                <div className="clinks">
                    <a href="https://www.linkedin.com/in/jason-dmello-598070233/" target="_blank" rel="noopener noreferrer" className="clink"><img src = {linkedin} alt = "linkedin" className = "cicon"/></a>
                    <a href="https://github.com/Jansxn" target="_blank" rel="noopener noreferrer" className="clink"><img src = {github} alt = "github" className = "cicon"/></a>
                    <a href = "mailto: jason.dmello21@gmail.com"><img src = {email} alt = "email" className="cicon" /></a>
                </div>
            </div>
        </div>

        </div>
    )
}

export default Contact;
