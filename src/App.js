import React, { useEffect } from 'react'
import './App.css'

// Imports data and firesbase util to add data to firebase
// import {ACCOUNTS} from './data'
// import {USERS} from './data'
// import {addCollectionsAndDocuments} from './firebase/firebase.utils'
import {getUsers} from './firebase/firebase.utils'
import {getAccounts} from './firebase/firebase.utils'


const App = () => {

  // Adds data to firebase when called
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
    </div>
  )
}

export default App
