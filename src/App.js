import LandingPage from './LandingPage/LandingPage';
import './App.css';
import Login from './Login/Login';
import Register from './Register/Register';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>on AUX</h1>
      </header>
      <main>
        {/* routes */}
        <LandingPage />
        <Login />
        <Register />
      </main>
    </div>
  );
}

export default App;
