import { Component } from 'react';

export default class LandingPage extends Component {
    onClickLogin = () => {
        console.log('Login!')
    }
    onClickRegister = () => {
        console.log('Register!')
    }

    render() {
        return (
            <div>
                <h2>So who's on aux?</h2>
                <p>Let's be real - no one is listening to the music you're posting on Instagram.
                    Your friends might not have the streaming platform for that link you sent them.
                    What if you want to share that perfect playlist to everybody? <br />

                    A solution for sharing music with people, event if you aren't physically be on AUX.
                </p>

                <button type='button' onClick={this.onClickLogin}>Login</button>
                <button type='button' onClick={this.onClickRegister}>Register</button>
            </div>
        )
    }
}