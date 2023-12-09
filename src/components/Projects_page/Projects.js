import React, {useState} from "react";
import "./Projects.css";
import PCards from "./PCards";
import {proj} from '../personal_info.js'

function Projects() {

    const [proj_name, setProj_name] = useState(proj[0].name)
    const [proj_id, setProj_id] = useState(proj[0].id)

    function changeCard(e){
        e.preventDefault()
        
        for (var i = 0; i < document.getElementsByClassName("pbutton").length; i++){
            document.getElementsByClassName("pbutton")[i].classList.remove("active")
        }

        setProj_name(e.target.innerHTML)
        setProj_id(e.target.id-1)
        e.target.classList.add("active")
        // console.log(e.target.innerHTML)
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
                    <PCards name = {proj_name} id = {proj_id}/>
                </div>
            </div>

        </div>
    );
}

export default Projects;