import React from 'react'
import { techstacks } from './constants/data'

export function Techstacks(){
    var lang = techstacks[0].map((language)=> <li className = "rounded-full" key = {language}>{language}</li>);
    var web = techstacks[1].map((language)=> <li className = "rounded-full" key = {language}>{language}</li>);

    return(
        <div>
            <div className = "ts-flex">
                <div className='languages'>
                    Languages:
                    <ul>{lang}</ul>
                </div>
                <div className='web'>
                    Web-dev techstack:
                    <ul>{web}</ul>
                </div>
            </div>
        </div>
    )
}
