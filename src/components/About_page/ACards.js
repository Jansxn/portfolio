import React from "react";
import "./ACards.css";

function ACards(props) {
    var alt, main, textmain, textalt;
    if (props.background === "dark") {
        main = '#060e02';
        alt = '#e4eaf1';
        textalt = '#060e02';
        textmain = '#e4eaf1';
    } else {
        main = '#c3eb2e';
        alt = "#060e02";
        textmain = "#060e02";
        textalt = '#e4eaf1';
    }

    return (
        <div className={"acard " + props.name} style={{backgroundColor:main, color:textmain, border: '2px solid ' + textmain}}>

            <div className="acardtitle">
                {props.title}
            </div>

            <div className="acarddesc">
                {props.items.map((item) => (
                    <div className="item" style={{backgroundColor:alt, color:textalt}}>{item}</div>
                ))}
            </div>

        </div>
    );
}

export default ACards;
