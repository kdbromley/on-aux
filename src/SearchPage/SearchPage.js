import base64 from 'base-64';
import utf8 from 'utf8';
import { useState } from 'react'

export default function SearchPage(props) {

    const [songParam, setSongParam] = useState(false);
    const [artistParam, setArtistPram] = useState(false);


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

                <label htmlFor='song'>Song<input id='Song' type='checkbox' name='searchType' value='track' onChange={(e) => watchSongCheckbox(e)} /></label>
                <label htmlFor='artist'>Artist<input id='artist' type='checkbox' name='searchType' value='Artist' onChange={(e) => watchArtistCheckbox(e)} /></label>
            </fieldset>
            <button type='submit'>Search</button>
        </form>
    )

}