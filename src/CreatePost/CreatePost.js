import React, { useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import './CreatePost.css'

export default function CreatePost(props) {
    const [isSongData, setIsSongData] = useState(false);
    const location = useLocation();
    const { song } = location.state || {};
    return(
        <div className='CreatePost'>
        {location.state === null ? 
            <Redirect to="/search" /> : <></>
            }

            <div className='Create__song'>
                <img src={`${song.art}`} alt={`${song.album} album artwork`}></img>
                <h3>{song.title}</h3>
                <h4>{song.artist}</h4>
                <h5>{song.album}</h5> 
                <label id='comment'>Anything to add?<input type='textbox' className='Create__comment' id='comment' /></label>
            </div>
            <button type='button'>Post song</button>
    </div>
    )    
    console.log(song)   
}