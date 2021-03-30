import React from "react";

export default function SearchResults(props){
    if (props.results.ready) {
        return (
            <div className="srch-results">
                <h2>{props.results.word}</h2>
                <p>{props.results.phoneticText}</p>
                <h4>{props.results.partOfSpeech}</h4>
                <p>{props.results.definition}</p>
                <p>{props.results.example}</p>
                <div className="synonyms">{props.results.synonyms}</div>
            </div>
        )
    } else {
        return null;
    }
    
}