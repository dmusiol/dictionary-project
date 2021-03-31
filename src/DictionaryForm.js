import React, { useState} from "react";
import './DictionaryForm.css';
import axios from "axios";
import SearchResults from "./SearchResults";


export default function DictionaryForm(props) {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState({ready: false});

    function handleResponse(response) {
        console.log(response.data[0]);
        setResults({
            ready: true,
            response: response.data[0],
        });
    }

    function search(event) {
        event.preventDefault();

        let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiURL).then(handleResponse);
    }

    function handleKeywordChange(event) {
        event.preventDefault();
        setKeyword(event.target.value);
    }


    return (
        <div className="search-form">
           <form className="dictionary-form" onSubmit={search}>
               <input type="search" className="search-input" placeholder="Type your word" onChange={handleKeywordChange}></input>
               <button type="submit" className="search-btn">Search</button>
           </form>
           <SearchResults results={results}/>
        </div>
    )
}