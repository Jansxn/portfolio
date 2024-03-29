import React from "react";
import "./Experience.css";
// import { exp } from "../personal_info";

import {db} from '../../config/firebase.js';
import { collection, getDocs } from 'firebase/firestore';

function ExperienceCard({ name, desc, role, resource, id, location, duration }) {
    function add_zero(x) {
        if (x < 10) {
            return "0" + x;
        }
        return x;
    }

    return (
        <div className="experience_card">
            
            <div className="experience_card_info">

                <div className="experience_card_infoinner">
                <div className="experience_card_title">
                    <div className = "experience_num_extra">
                        <div className = "experience_num_mobile">{add_zero(id)}</div>
                        <a href={resource} target="_blank" rel="noreferrer">
                            {name}
                        </a>
                    </div>
                </div>
                <div className="experience_card_location">
                    {location}
                </div>
                </div>

                <div className="experience_card_role">
                    {role}
                </div>
                <div className="experience_card_duration">
                    {duration}
            </div>

                <ul className="experience_card_desc">
                    {desc.map((d, ind) => (
                        <li className="experience_card_desc_point" key= {ind}>
                            {d}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="experience_card_num">
                {add_zero(id)}
            </div>

        </div>
    )
}

function Experience() {
    var [exp, setExp] = React.useState([{name:'', id:0, tech:[], desc:[], resource:'', gitlink:''}]);
    var expRef = collection(db, 'experience');

    React.useEffect(() => {
        const getData = async () => {
            const data = await getDocs(expRef);
            setExp(data.docs.map((doc) => ({
                ...doc.data()
            })));
        };
    
        getData();
    }, []);
    
    return (
        <div className="experience" id = "experience">
            <div className="etitle title">
                Experience
                <div className="underline"></div>
            </div>

            <div className="experience_container">
                {exp.map((e) => (
                    <ExperienceCard name={e.comp_name} desc={e.desc} role={e.role} resource={e.resource} id = {e.id} location = {e.location} duration = {e.duration}/>
                ))}
            </div>
        </div>
    )
}

export default Experience;