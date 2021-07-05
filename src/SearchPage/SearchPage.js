import { useState } from 'react'
import SearchResults from '../SearchResults/SearchResults';
import ValidationError from '../ValidationError';

function mapSearch(search) {
    let array = search.tracks.items;
    let tracksArray = [];
    array.map(track => {
        let r = { artist: '', title: '', album: '', art: '', comments: '' }
        r.artist = track.album.artists[0].name;
        r.title = track.name;
        r.album = track.album.name;
        r.art = track.album.images[1].url;
        r.comment = '';
        tracksArray.push(r)
    })
    return tracksArray;
    
}


export default function SearchPage(props) {

    const [songParam, setSongParam] = useState(false);
    const [artistParam, setArtistPram] = useState(false);
    const [isResultsVis, setIsResultsVis] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isTouched, setIsTouched] = useState(false);
    const [error, setError] = useState('')

    const handleSearch = (e) => {
        //Dummy search results used in place of SPOTIFY api 
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

                <label htmlFor='song'>Song<input id='Song' type='checkbox' name='searchType' value='track' onChange={(e) => watchSongCheckbox(e)} /></label>
                <label htmlFor='artist'>Artist<input id='artist' type='checkbox' name='searchType' value='Artist' onChange={(e) => watchArtistCheckbox(e)} /></label>
            </fieldset>
            <button type='submit'>Search</button>
        </form>

        {isResultsVis &&
          <div className='SearchResults'>
                <h2>Results</h2>
                {searchResults.map((result, i) =>  <SearchResults key={i} searchResult={result} /> )
                }
                **search form not live, results for demonstration only :) **
          </div>
        }
      </div>
    )

}