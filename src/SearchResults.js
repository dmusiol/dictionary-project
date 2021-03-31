import React from "react";
import Meaning from "./Meaning";


export default function SearchResults(props){
    if (props.results.ready) {
        return (
            <div className="srch-results">
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