import { Component } from 'react';
import LandingPage from './LandingPage/LandingPage';
import Login from './Login/Login';
import Register from './Register/Register';
import './App.css';
import { Route } from 'react-router-dom';

class App extends Component {
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
       component={Login}
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
          <h1>on AUX</h1>
        </header>
        <main>
          {this.renderRoutes()}
        </main>
      </div>
    );
  }
}

export default App;
