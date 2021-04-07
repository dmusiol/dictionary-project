import React from "react";
import "./styles/Footer.css";
import {AiOutlineGithub, AiFillFacebook, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';



export default function Footer(){
    return (
        <div className="container footer-wraper">
            <div className="row footer-row">
                <div className="col-md-6 p-0 coded-by">
                    <p className="pt-3 project-coded">This project was coded by Dominika Musioł.</p>
                    <p className="source-link"><a href="https://github.com/dmusiol/dictionary-project">Open-sourced</a> on GitHub.</p>
                </div>
                <div className="col-md-6 media-icons">
                    <a href="https://www.facebook.com/dominikabm/" title="Facebook Profile" target="_blank" rel="noreferrer"><AiFillFacebook/></a>
                    <a href="https://www.linkedin.com/in/dominika-musioł/" title="LinkedIn Profile" target="_blank" rel="noreferrer"><AiFillLinkedin/></a>
                    <a href="https://github.com/dmusiol" title="GitHub Profile" target="_blank" rel="noreferrer"><AiOutlineGithub/></a>
                    <a href="mailto:dominikamusiol07@gmail.com" title="Email contact"><AiOutlineMail /></a>
                </div>
            </div>
        </div>
    )
}