import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './LandingPage.css';

export default class LandingPage extends Component {

    render() {
        return (
            <div>
                <h2>So who's on aux?</h2>
                <p>Let's be real - no one is listening to the music you're posting on Instagram.
                    Your friends might not have the streaming platform for that link you sent them.
                    What if you want to share that perfect playlist to everybody? <br />

                    A solution for sharing music with people, event if you aren't physically be on AUX.
                </p>

                <NavLink to='/login' activeClassName='Login__button-selected'><button type='button'>Login</button></NavLink>
                <NavLink to='/register' activeClassName='Register__button-selected'><button type='button'>Register</button></NavLink>
            </div>
        )
    }
}