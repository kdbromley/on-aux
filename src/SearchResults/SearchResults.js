import React from 'react';
import { Link } from 'react-router-dom'

export default function SearchResults(props) {
    const result = props.searchResult
    console.log(result)
    return(
        <div className='SearchResult__container'>
             <Link 
              to={{
                pathname: '/create-post',
                state: {
                    song: result,
                },
              }}
             >
            <img src={result.art} />
                <h4>{result.title}</h4>
            </Link>
                <a><h5>{result.artist}</h5></a>
                <a><h6>{result.album}</h6></a>
            </div>
    )
}