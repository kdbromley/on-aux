import React, { useContext, useState } from 'react';
import { Redirect, useLocation } from 'react-router';
import  { STORE } from '../dummy-store';
import { useHistory } from "react-router";
import './CreatePost.css'


export default function CreatePost(props) {
    let history = useHistory();
    const [isSongData, setIsSongData] = useState(false);
    const location = useLocation();
    let { song } = location.state || {};
    const posts = STORE.posts;

    const handleCreatePost = (e) => {
        e.preventDefault();
        const userComms = e.target.comment.value || '';
        console.log(userComms);
        posts.push(
            {
                title: song.title,
                artist: song.artist,
                alsum: song.album,
                comment: userComms.comment,
            }
        )  
        var comment = document.getElementById('comment') || "";
        history.push(location);  
    }
        
    return(
        <div className='CreatePost'>
        {location.state === null ? 
            <Redirect to="/search" /> : <></>
            }

            <form className='Create__song'
                onSubmit={(e) => handleCreatePost(e)}>
                <img src={`${song.art}`} alt={`${song.album} album artwork`}></img>
                <h3>{song.title}</h3>
                <h4>{song.artist}</h4>
                <h5>{song.album}</h5> 
                <label htmlFor='comment'>Anything to add?<input type='textbox' className='Create__comment' id='comment' name='comment' /></label>


                <button type='submit'>Post song</button>
            </form>

        </div>
    )    
    console.log(song)   
}