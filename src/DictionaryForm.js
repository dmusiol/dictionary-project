import React, { useState} from "react";
import './DictionaryForm.css';
import axios from "axios";
import SearchResults from "./SearchResults";


export default function DictionaryForm(props) {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState({ready: false});

    function handleResponse(response) {
        setResults({
            ready: true,
            word: response.data[0].word,
            phoneticText: response.data[0].phonetics[0].text,
            phoneticAudio: response.data[0].phonetics[0].audio,
            partOfSpeech: response.data[0].meanings[0].partOfSpeech,
            definition: response.data[0].meanings[0].definitions[0].definition,
            example: response.data[0].meanings[0].definitions[0].example,
            synonyms: response.data[0].meanings[0].definitions[0].synonyms,
        })
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