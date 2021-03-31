import React from "react";
import Meaning from "./Meaning";

export default function SearchResults(props){
    if (props.results.ready) {
        return (
            <div className="srch-results">
                <h2>{props.results.response.word}</h2>
                <p>{props.results.response.phonetics[0].text}</p>
                {props.results.response.meanings.map(function(meaning, index) {
                    return (
                        <div key={index}>
                            <Meaning meaning={meaning} />
                        </div>
                    )
                })}
                
            </div>
        )
    } else {
        return null;
    }
    
}