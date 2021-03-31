import React from "react";
import {AiFillSound} from 'react-icons/ai';


export default function Phonetics(props) {
let audio = new Audio(props.phonetics.audio);

const playAudio = () => {
    audio.play();
}

    if (props.phonetics) {
        return (
            <div className="phonetics-wraper d-flex">
                <button className="audio-btn" onClick={playAudio}><AiFillSound/></button>
            </div>
        )
    } else {
        return null;
    }
}