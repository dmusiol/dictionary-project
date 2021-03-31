import React from "react";
import "./styles/Synonyms.css";


export default function Synonyms(props) {
    if (props.synonyms) {
        return (
        <div className="synonyms d-flex">
            <p className="align-self-center">Synonyms:</p>
            <ul className="d-flex flex-wrap justify-content-start mb-0">
                {props.synonyms.map(function(synonym, index) {
                    return (
                        <li key={index} className="p-2 m-2">{synonym}</li>
                    )
                })}
            </ul>
        </div>
        )
    } else {
        return null;
    }
}
