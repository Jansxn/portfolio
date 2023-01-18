import React from 'react'
import linkedin from './images/linkedin.png'
import github from './images/github.png'
import gmail from './images/gmail.png'
import phone from './images/phone.png'

export function Contact() {
    return(
        <div className = "contact" id = "contact">

            <div className = "title"> Contact </div>

            <div className = "contact-desc">
                Below are links and other informartion to get in contact with me. Feel free to drop a message on any platform.
            </div>

            <div className = "contact-links">

                <a href = "https://www.linkedin.com/in/jason-dmello-598070233/" target = "_blank" rel='noreferrer'>
                    <img src = {linkedin} alt = "linkedin" className = "contact-img"/>
                </a>

                <a href = "https://github.com/Jansxn" target = "_blank" rel='noreferrer'>
                    <img src = {github} alt = "github" className = "contact-img"/>
                </a>

                <div className = "email" id = "email">
                    <img src = {gmail} alt = "gmail" className = "contact-img" onClick={handleclickemail}/>
                    <span className='contact-info' id="mailid">
                        jason.dmello21@gmail.com
                    </span>
                </div>

                <div className = "phone" id = "phone">
                    <img src = {phone} alt = "phone" className = "contact-img" onClick={handleclickphone}/>
                    <span className='contact-info' id="number">
                        +91 89 76 080 920
                    </span>
                </div>

            </div>
        
            <div className = "copy">
            This website was made using React.js and Tailwind.css by Jason Shaun D'Mello. The code is avaliable on github.<br />
            Image Icons were aquired from icons8.com
            </div>
        </div>
    )
}

function handleclickemail (e){
    var email = document.getElementById("email");
    var link = document.getElementById("mailid");
    link.classList.toggle("visible");
    email.classList.toggle("clicked");
}

function handleclickphone (e){
    var phone = document.getElementById("phone");
    var number = document.getElementById("number");
    number.classList.toggle("visible");
    phone.classList.toggle("clicked");
}