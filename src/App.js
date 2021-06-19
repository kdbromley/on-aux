import React from 'react';
import { Link, Route } from 'react-router-dom';
import { STORE } from './dummy-store';
import { v4 as uuidv4 } from 'uuid';
import LandingPage from './LandingPage/LandingPage';
import Login from './Login/Login';
import Register from './Register/Register';
import ProfilePage from './ProfilePage/ProfilePage';
import MyAccountPage from './MyAccountPage/MyAccountPage';
import Post from './Post/Post';
import './App.css';
import UsersContext from './UsersContext';

class App extends React.Component {
  state = {
    currentUser: {},
    users: [],
    posts: [],
  }

  componentDidMount() {
    this.setState({ 
      users: STORE.users,
      posts: STORE.posts 
    })
  }

  validateLogin = (username) => {
    const user = this.state.users.find(user => user.username === username)
    if(!user) {
      return Promise.reject;
    } else {
      return user;
    }
  }

  onSubmitLogin = (user) => {
    this.setState({
      currentUser: user
    })
  } 
  
  onSubmitRegistration = (newUser) => {
    if (!newUser.username || !newUser.password) {
      console.error('Username or password missing')
      return;
    }
    newUser.id = uuidv4()
    this.setState({
      users: [...this.state.users, newUser]
    }, () => console.log(this.state.users));
  }

  renderExteriorRoutes() {
    return (
     <>
      <Route 
       exact
       path={['/', '/login', '/register']}
       component={LandingPage}
      />
      <Route
       path='/login'
       render={(props) => 
        <Login {...props} handleSubmitLogin={this.onSubmitLogin} />
       }
      />
      <Route
       path='/register'
       render={(props) => 
        <Register {...props} handleSubmitRegistration={this.onSubmitRegistration} />
       }
      />
     </>
    )
  }

  renderInteriorRoutes() {
    return(
      <>
      <Route 
       path='/accounts/:accountId'
       component={ProfilePage}
       />
      <Route 
       path='/accounts/:accountId/:postId'
       component={Post}
      />
      <Route 
       path='/accounts/my-account'
       component={MyAccountPage}
       />
      </>
    )
  }
  
  render() {
    const usersValue = {
      currentUser: this.state.currentUser,
      users: this.state.users,
      registerUser: () => {},
      validateUser: this.validateLogin,
      loginUser: () => {},
    }
    return (
      <div className="App">
        <header className="App-header">
          <Link to ='/'><h1>on AUX</h1></Link>
        </header>
        <main>
          <UsersContext.Provider value={usersValue}>
            {this.renderExteriorRoutes()}
            {this.renderInteriorRoutes()}
          </UsersContext.Provider>
        </main>
      </div>
    );
  }
}

export default App;
