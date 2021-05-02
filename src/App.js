import React from 'react';
import LandingPage from './LandingPage/LandingPage';
import Login from './Login/Login';
import Register from './Register/Register';
import './App.css';
import { Link, Route } from 'react-router-dom';

class App extends React.Component {
  state = {
    users: []
  }

  onSubmitLogin = (username, password) => {
    console.log(username, password)
  } 
  
  onSubmitRegistration = (user, pass) => {
    const newUser = { username: user, password: pass }
    console.log(newUser)
    this.setState({
      users: [...this.state.users, newUser]
    });
  }

  renderRoutes() {
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
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to ='/'><h1>on AUX</h1></Link>
        </header>
        <main>
          {this.renderRoutes()}
        </main>
      </div>
    );
  }
}

export default App;
