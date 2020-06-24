import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// import {ACCOUNTS} from './data'
// import {USERS} from './data'
// import {addCollectionsAndDocuments} from './firebase/firebase.utils'
import {getUsers} from './firebase/firebase.utils'
import {getAccounts} from './firebase/firebase.utils'


function App() {
  // useEffect(() => {
  //   addCollectionsAndDocuments('accounts', ACCOUNTS)
  //   addCollectionsAndDocuments('users', USERS)
  // }, [])

  useEffect(() => {
    getUsers()
    getAccounts()
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
