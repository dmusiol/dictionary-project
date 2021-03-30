import React from "react";
import './DictionaryForm.css';

export default function DictionaryForm() {
    return (
        <div className="search-form">
           <form className="dictionary-form">
               <input type="search" className="search-input" placeholder="Type your word"></input>
               <input type="button" className="search-btn" value="Search"></input>
           </form>
        </div>
    )
}