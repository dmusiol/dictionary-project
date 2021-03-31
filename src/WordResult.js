import React from "react";
import Phonetics from "./Phonetics";


export default function WordResult(props) {
    if(props.results.ready) {
        return (
            <div className="basic-result">
                <div className="d-flex">
                    <h2 className="m-0 pe-3 align-self-center">{props.results.response.word}</h2>
                    {props.results.response.phonetics.map(function(phonetic, index) {
                        return (
                        <div key={index}> 
                        <Phonetics phonetics={phonetic} />
                        </div>
                        )
                    })}
                    </div>
                <div>
                    <p className="pt-2 pb-5">{props.results.response.phonetics[0].text}</p>
                </div>
            </div>
        )
    } else {
        return null;
    }

}