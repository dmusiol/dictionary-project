import React from "react";
import "./styles/Footer.css";
import {AiOutlineGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';



export default function Footer(){
    return (
        <div className="container footer-wraper">
            <div className="row footer-row">
                <div className="col-md-6 d-flex flex-column p-0">
                    <p>This project has been coded by Dominika Musioł.</p>
                    <p>Open-sourced on GitHub</p>
                </div>
                <div className="col-md-6 media-icons">
                    <a href="https://www.facebook.com/dominikabm/" title="Facebook Profile" target="_blank" rel="noreferrer"><AiFillFacebook/></a>
                    <a href="https://www.linkedin.com/in/dominika-musioł/" title="LinkedIn Profile" target="_blank" rel="noreferrer"><AiFillLinkedin/></a>
                    <a href="https://github.com/dmusiol" title="GitHub Profile" target="_blank" rel="noreferrer"><AiOutlineGithub/></a>
                </div>
            </div>
        </div>
    )
}