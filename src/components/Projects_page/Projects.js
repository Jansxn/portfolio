import React, {useState, useEffect} from "react";
import "./Projects.css";
import PCards from "./PCards";
// import {proj} from '../personal_info.js'

import {db} from '../../config/firebase.js';
import { collection, getDocs } from 'firebase/firestore';

function Projects() {

    const [proj, setProj] = useState([{name:'', id:0, tech:[], desc:[], resource:'', gitlink:''}]);
    const [cur_proj, setCur_proj] = useState({name:'', id:0, tech:[], desc:[], resource:'', gitlink:''})

    const projRef = collection(db, 'projects');
    useEffect(() => {
        const getProjects = async () => {
            const data = await getDocs(projRef);
            setProj(data.docs.map((doc, index) => ({
                id: index + 1, // Add 1 to start the id from 1
                ...doc.data()
            })));
            setCur_proj(data.docs[0].data())
        };
        getProjects();
        setCur_proj(proj[0])
    }, []);

    function changeCard(e){
        e.preventDefault()
        
        for (var i = 0; i < document.getElementsByClassName("pbutton").length; i++){
            document.getElementsByClassName("pbutton")[i].classList.remove("active")
        }
        setCur_proj(proj[e.target.id-1])
        e.target.classList.add("active")
    }
    // console.log(proj)
    var proj_name_list = (proj.map((eproj) => <button onClick={changeCard} className="pbutton" id= {eproj.id}>{eproj.name}</button>))
    return (
        <div className="projects" id = "projects">

            <div className="ptitle title">
                Projects
                <div className="punder underline"></div>
            </div>

            <div className="pcards-container">

                <div className="scrollmenu">
                    {proj_name_list}
                </div>

                <div className="pcard-holder">
                    <PCards proj = {cur_proj}/>
                </div>
            </div>

        </div>
    );
}

export default Projects;