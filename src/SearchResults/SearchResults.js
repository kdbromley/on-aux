import React from 'react';

export default function SearchResults(props) {
    const result = props.searchResult
    return(
        <div className='SearchResult__container'>
            <img src={result.art} />
            <h4> Title: {result.title}</h4>
            <h4>Artist: {result.artist}</h4>
            <h4>Album: {result.album}</h4>
        </div>
    )
}