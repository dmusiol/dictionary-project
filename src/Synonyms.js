import React from "react";
import "./styles/Synonyms.css";


export default function Synonyms(props) {
    if (props.synonyms) {
        return (
        <div className="synonyms d-flex flex-column">
            <h5 className="align-self-start pt-3">synonyms:</h5>
            <ul className="mb-0 pb-3 pt-3">
                {props.synonyms.map(function(synonym, index) {
                    return (
                        <li key={index} className="p-2 m-3">{synonym}</li>
                    )
                })}
            </ul>
        </div>
        )
    } else {
        return null;
    }
}
