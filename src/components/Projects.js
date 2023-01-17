import React from 'react';
import { projects } from './constants/data';

export default function Projects() {
    var p_desc = [];

    for (var i = 0; i < projects.length; i++) {
        p_desc[i] = projects[i].desc.map((d) => <li>{d}</li>)
    }

    var projectList = projects.map((p) => 
        <div className="project-item" key={p.id}>

            <div className = "p-name">
                <h2 className='p-title'><b>{p.name}</b></h2>
                <img src = {p.img} alt = {p.name} />
                <a href={p.link}>Github</a>
            </div>

            <p className='p-desc'>
                <ul className=''>{p_desc[p.id]}</ul>
            </p>
        </div>
    )

    projectList.reverse();

    return (
        <div className="projects" id = "project">
            <h1 className='title'>Projects</h1>
            <div className="project-list">
                {projectList}
            </div>    
        </div>
    )
}