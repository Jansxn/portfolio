import React from "react";
import "./About.css";
import ACards from "./ACards.js";
import jason_profile from "../../resources/jason_prof.jpg";
// import { technologies , pro_languages, web_languages, ling} from "../personal_info.js";

import {db} from '../../config/firebase.js';
import { collection, getDocs } from 'firebase/firestore';

function About() {
    var [technologies, setTechnologies] = React.useState([]);
    var [pro_languages, setPro_languages] = React.useState([]);
    var [web_languages, setWeb_languages] = React.useState([]);
    var [ling, setLing] = React.useState([]);

    const aboutRef = collection(db, 'about-cards');
    React.useEffect(() => {
        const getData = async () => {
            const data = await getDocs(aboutRef);
            setTechnologies(data.docs[0].data().technologies);
            setPro_languages(data.docs[0].data().pro_languages);
            setWeb_languages(data.docs[0].data().web_languages);
            setLing(data.docs[0].data().ling);
        };
    
        getData();
    }, []);

    return (
        <div className="about" id = "about" style={{width:'100%'}}>

            <div className="atitle title">
                ABOUT ME
                <div className="underline"></div>
            </div>

            <div className="asubtitle">
            <div className="adesc">
                <ul className="amain">
                    <li>Hi, I'm a junior computer science major passionate about developing innovative and user-friendly software solutions for real-world problems.</li>
                    <li>I'm always eager to learn new skills and technologies, and I'm looking for internship opportunities in the software industry.</li>
                    <li>You can check out my <a href="#projects">Projects section</a> to see some of my work samples. <a href="#contact">Contact me</a> if you're interested in hiring or collaborating with me.</li>
                </ul>
            </div>

            <div className="acards">
                <ACards title='Technologies' background='light' items={technologies} name = 'n1'/>
                <ACards title='Computer Languages' background='light' items={pro_languages} name = 'n2'/>
                <ACards title='Linguistic Languages' background='dark' items={ling} name = 'n3'/>
                <ACards title='Web-dev' background='dark' items={web_languages} name = 'n4'/>
            </div>

            <div className="aimage">
                <img src={jason_profile} alt="IMG-20201225-162544" border="0" />
            </div>
            </div>
        </div>
    );
}

export default About;