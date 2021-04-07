import React, { useState} from "react";
import './styles/DictionaryForm.css';
import axios from "axios";
import SearchResults from "./SearchResults";
import WordResult from "./WordResult";
import Images from "./Images";


export default function DictionaryForm(props) {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [images, setImages] = useState(null);

    // Dictionary API response
    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }

    // Pexels API response
    function handleImagesResponse(response) {
        setImages(response.data.hits);
    }


    function search() {

        // dictionary API call
        let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiURL).then(handleDictionaryResponse);

         // pexels API call
        //let pexelsApiKey = `${process.env.REACT_APP_IMAGES_KEY}`;
        //let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        //let headers = { Authorization: `Bearer ${pexelsApiKey}` };
        //axios.get(pexelsApiUrl, { headers: headers }).then(handleImagesResponse);

        let pixbayKey = `${process.env.REACT_APP_PIXBAY_KEY}`;
        let pixbayURL = `https://pixabay.com/api/?key=${pixbayKey}&q=${keyword}&image_type=photo&per_page=5`;
        axios.get(pixbayURL).then(handleImagesResponse);
    }

    function handleSubmit(e) {
        e.preventDefault();
        search();
    }

    function handleKeywordChange(e) {
        e.preventDefault();
        setKeyword(e.target.value);
    }

    function load() {
    setLoaded(true);
    search();
  }


    if (loaded){
    return (
        <div>
            <div className="search-form">
              <form className="dictionary-form" onSubmit={handleSubmit}>
                <input type="search" className="search-input" placeholder="Type your word" onChange={handleKeywordChange}></input>
                <button type="submit" className="search-btn">Search</button>
              </form>
           </div>
           {results ? (
            <div className="all-results">
               <WordResult results={results}/>
               <SearchResults results={results}/>
               <Images images={images} />
            </div>
            ) : null }
        </div>
    );
    } else {
        load();
        return "Loading...";
    }
}
