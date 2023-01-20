import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import UserContext from './context/user/user_context';

function App() {
  const {user} = useContext(UserContext)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h2>Welcome back {user.name} {user.lastName}</h2>
      </header>
    </div>
  );
}

export default App;
