<<<<<<< HEAD
import { useState } from 'react'
import SearchResults from '../SearchResults/SearchResults';
import ValidationError from '../ValidationError';

function mapSearch(search) {
    let array = search.tracks.items;
    let tracksArray = [];
    array.map(track => {
        let r = { artist: '', title: '', album: '', art: '' }
        r.artist = track.album.artists[0].name;
        r.title = track.name;
        r.album = track.album.name;
        r.art = track.album.images[1].url;
        tracksArray.push(r)
    })
    return tracksArray;
    
}

=======
import base64 from 'base-64';
import utf8 from 'utf8';
import { useState } from 'react'
>>>>>>> main

export default function SearchPage(props) {

    const [songParam, setSongParam] = useState(false);
    const [artistParam, setArtistPram] = useState(false);
<<<<<<< HEAD
    const [isResultsVis, setIsResultsVis] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isTouched, setIsTouched] = useState(false);
    const [error, setError] = useState('')

    const handleSearch = (e) => {
        //Demo search results SPOTIFY api used
        e.preventDefault();
        if(!isResultsVis) setIsResultsVis(true);

        setSearchResults(mapSearch(props.search));

        
    }

   /******  FUTURE UI FEATURES   ******/
    const watchSearch = (e) => {
      /*  setIsTouched(true)
        setSearchTerm(e.target.value)
        if(isTouched && (searchTerm.length < 1 || searchTerm === '')) setError('Search term required'); */
    }

    const watchSongCheckbox = (e) => {
       /* setSongParam(e.target.checked) */
    }

    const watchArtistCheckbox = (e) => {
        /* setArtistPram(e.target.checked) */
    }
    
    return(
      <div className='SearchPage'>
        <form className='SearchPage__form' onSubmit={(e) => handleSearch(e)}>
            <label htmlFor='searchTerm'>Search term: 
                <input id='searchTerm' type='text' placeholder='Song and/or artist' 
                 onChange={(e) => watchSearch(e)} />
                {/* {error.length > 1 && 
                    <ValidationError message={error} />
                 }  */}
            </label>
            <fieldset>
                <legend>Specify your search (optional)</legend>
=======


    const handleSearch = (e) => {
        //SPOTIFY API requires authorization token -- will not be implemented until backend built
            //requires temp access token, cookies etc.
        //Replaced by search results copy pasted from POSTMAN demo of spotify api search to replicate for static app
        e.preventDefault();
        const { searchTerm } = e.target;

    }

    const watchSongCheckbox = (e) => {
        setSongParam(e.target.checked)
    }

    const watchArtistCheckbox = (e) => {
        setArtistPram(e.target.checked)
    }
    
    return(
        <form className='SearchPage__form' onSubmit={(e) => handleSearch(e)}>
            <label htmlFor='searchTerm'><input id='searchTerm' type='text' placeholder='Search for artist, album or song' /></label>
            <fieldset>
                <legend></legend>
>>>>>>> main

                <label htmlFor='song'>Song<input id='Song' type='checkbox' name='searchType' value='track' onChange={(e) => watchSongCheckbox(e)} /></label>
                <label htmlFor='artist'>Artist<input id='artist' type='checkbox' name='searchType' value='Artist' onChange={(e) => watchArtistCheckbox(e)} /></label>
            </fieldset>
            <button type='submit'>Search</button>
        </form>
<<<<<<< HEAD

        {isResultsVis &&
          <div className='SearchResults'>
                <h2>Results</h2>
                {searchResults.map((result, i) =>  <SearchResults key={i} searchResult={result} /> )
                }
                **search form not live, results for demonstration only :) **
          </div>
        }
      </div>
=======
>>>>>>> main
    )

}