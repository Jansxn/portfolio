import React, {useState, useEffect} from "react";
import "./Home.css";
import illus from "../../resources/pavan 772.svg";
import linkedin from "../../resources/linkedin.png";
import oldresume from "../../resources/resume.pdf";

import { storage } from "../../config/firebase";
import {getDownloadURL, ref} from 'firebase/storage';

function Home() {
    var [resume, setResume] = useState(oldresume);

    useEffect(() => {
        getDownloadURL(ref(storage, 'JasonDMello_resume_main.pdf')).then((url) => {
            setResume(url);
        });
    }, []);

    return (
        <div className="h" id = "home" style={{width:'100%'}}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <div className="nav-space">
            </div>

            <div className="home">

                <div className="home-text">

                    <div className="hintro">
                        <div className="hname">Jason DMello</div>

                        <div className="himg-container">
                            <a href="https://www.linkedin.com/in/jason-dmello-598070233/" target="_blank" rel = "noreferrer"><img width="50" height="50" src={linkedin} alt="linkedin"/></a>
                            <a className="hbutton" href={resume} target="_blank" rel='noreferrer'>
                            <span className="material-symbols-outlined">download</span>
                                Download Resume
                            </a>
                        </div>

                        <div className="hdesc">
                            Junior at MIT, Manipal. An enthusiastic learner, currently working on multiple projects in multiple tech stacks.
                        </div>
                    </div>

                    <div className="hill-container">
                        <img className="hillustration" src={illus} alt='home-illustration'></img>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;