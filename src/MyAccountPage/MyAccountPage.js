import { Component } from "react";

export default class MyAccountPage extends Component {
    render() {
        const myUser = this.props.currentUser;
        return (
            <div>
                <h3>Welcome {myUser.displayName}</h3>
                <h4>Username: {myUser.username}</h4>
                <h4>Password:</h4>
            </div>
        )
    }
}