import React, { useEffect, useState } from 'react'
import './App.css'

// Imports data and firesbase util to add data to firebase
// import {ACCOUNTS} from './data'
// import {USERS} from './data'
// import {addCollectionsAndDocuments} from './firebase/firebase.utils'
import { getUsers } from './firebase/firebase.utils'
import { getAccounts } from './firebase/firebase.utils'
import UserList from './components/user-list/user-list.component'

const App = () => {

  const [users, setUsers] = useState([])
  const [accounts, setAccounts] = useState({})
  const [usersAndAccounts, setUsersAndAccounts] = useState([])

  // Adds data to firebase when called
  // useEffect(() => {
  //   addCollectionsAndDocuments('accounts', ACCOUNTS)
  //   addCollectionsAndDocuments('users', USERS)
  // }, [])

  useEffect(() => {
    let users = []
    let accounts = {}
    const getUsersAndAccounts = async () => {
      users = await getUsers()
      accounts = await getAccounts()
    }

    getUsersAndAccounts()
      .then(() => {
        setAccounts(accounts)
        setUsers(users)
      })

  }, [])

  useEffect(() => {
    const arr = []

    users.forEach(user => {
      arr.push({
        userName: user.name,
        account: user.account,
        ...accounts[user.account]
      })
    })

    setUsersAndAccounts(arr)
  }, [users, accounts])



  return (
    <div className="App">

      <UserList
        usersAndAccounts={usersAndAccounts}
       />

    </div>
  )
}

export default App
