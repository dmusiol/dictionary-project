import React, { useState} from "react";
import './styles/DictionaryForm.css';
import axios from "axios";
import SearchResults from "./SearchResults";
import WordResult from "./WordResult";


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
        <div>
            <div className="search-form">
              <form className="dictionary-form" onSubmit={search}>
                <input type="search" className="search-input" placeholder="Type your word" onChange={handleKeywordChange}></input>
                <button type="submit" className="search-btn">Search</button>
              </form>
           </div>
            <div className="all-results">
               <WordResult results={results}/>
               <SearchResults results={results}/>
            </div>
        </div>
    )
}