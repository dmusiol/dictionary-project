import React, { useState} from "react";
import './styles/DictionaryForm.css';
import axios from "axios";
import SearchResults from "./SearchResults";
import WordResult from "./WordResult";
import Images from "./Images";


export default function DictionaryForm() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState({ready: false});
    let [images, setImages] = useState(null);

    // Dictionary API response
    function handleDictionaryResponse(response) {
        console.log(response.data[0]);
        setResults({
            ready: true,
            response: response.data[0],
        });
    }

    // Pexels API response
    function handlePexelsResponse(response) {
        setImages(response.data.photos);
    }


    function search(e) {
        e.preventDefault();

        // dictionary API call
        const apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiURL).then(handleDictionaryResponse);

         // pexels API call
        const pexelsApiKey = "563492ad6f91700001000001a6727e57f29040469e8b529237d7fe76";
        const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        const headers = { Authorization: `Bearer ${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);

    }

    function handleKeywordChange(e) {
        e.preventDefault();
        setKeyword(e.target.value);
    }


    return (
        <div>
            <div className="search-form">
              <form className="dictionary-form" onSubmit={search}>
                <input type="search" className="search-input" placeholder="Type your word" onChange={handleKeywordChange}></input>
                <button type="submit" className="search-btn">Search</button>
              </form>
           </div>
           {results.ready === true ? (
            <div className="all-results">
               <WordResult results={results}/>
               <SearchResults results={results}/>
               <Images images={images} />
            </div>
            ) : null }
        </div>
    )
}