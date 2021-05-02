import { Component } from 'react';
import LandingPage from './LandingPage/LandingPage';
import Login from './Login/Login';
import Register from './Register/Register';
import './App.css';
import { Link, Route } from 'react-router-dom';

class App extends Component {
  onSubmitLogin(username, password) {
    console.log(username, password)
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
        <Login {...props} onSubmitLogin={this.onSubmitLogin} />
       }
      />
      <Route
       path='/register'
       component={Register}
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
