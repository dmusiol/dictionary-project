import React from "react";
import {AiFillAudio} from 'react-icons/ai';

export default function Phonetics(props) {
let audio = new Audio(props.phonetics.audio);

const playAudio = () => {
    audio.play();
}

    if (props.phonetics) {
        return (
            <div className="phonetics-wraper d-flex">
                <p>{props.phonetics.text}</p>
                <button className="audio-btn" onClick={playAudio}><AiFillAudio/></button>
            </div>
        )
    } else {
        return null;
    }
}