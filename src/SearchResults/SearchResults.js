import React from 'react';
import { Link } from 'react-router-dom'

export default function SearchResults(props) {
    const result = props.searchResult
    console.log(result)
    return(
        <div className='SearchResult__container'>
            <img src={result.art} />
            <Link 
              to={{
                pathname: '/create-post',
                state: {
                    song: result,
                },
              }}
             >
                <h4>{result.title}</h4>
            </Link>
            <Link
              to={{
                pathname: '/create-post/',
                state: {
                    love: 'simple',
                }
              }}>
                <a><h5>{result.artist}</h5></a>
                <a><h6>{result.album}</h6></a>
            </Link>
            </div>
    )
}