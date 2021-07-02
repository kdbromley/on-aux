import React from 'react';
import { useLocation } from 'react-router-dom';

export default function CreatePost(props) {
    const location = useLocation();
    const { song } = location.state || {};
    return(
        <div className='CreatePost'>
            <div className='Create__song'>
                Song
            </div>
        </div>
    )
}