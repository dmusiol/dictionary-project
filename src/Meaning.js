import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    return (
        <div className="meanings-wraper">
            <h5 className="meaning-word">{props.meaning.partOfSpeech}</h5>
            {props.meaning.definitions.map(function(definition, index) {
                return (
                    <div className="word-meaning" key={index}>
                        <div className="meaning-info">
                            <p className="definition">{definition.definition}</p>
                            <p className="example">{definition.example}</p>
                        </div>
                        <div className="synonyms-list">
                            <Synonyms synonyms={definition.synonyms}/>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}