import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function SearchResults(props){
    if (props.results.ready) {
        return (
            <div className="srch-results">
                <h2>{props.results.response.word}</h2>
                    {props.results.response.phonetics.map(function(phonetic, index) {
                        return (
                        <div key={index}> 
                        <Phonetics phonetics={phonetic} />
                        </div>
                        )
                    })}
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