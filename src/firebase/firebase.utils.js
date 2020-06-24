import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyBYcYQWn_95GnRyg-V8nMjpFjf3MW39Zyk",
    authDomain: "beezer-223b8.firebaseapp.com",
    databaseURL: "https://beezer-223b8.firebaseio.com",
    projectId: "beezer-223b8",
    storageBucket: "beezer-223b8.appspot.com",
    messagingSenderId: "449237187931",
    appId: "1:449237187931:web:34a67ca95a6546d56fee7e"
}

export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
    
    const collectionRef = firestore.collection(collectionKey)
    const batch = firestore.batch()
    const objectsToAddMod = objectsToAdd.accounts || objectsToAdd.users
    for(let keys in objectsToAddMod) {
        const newDocRef = collectionRef.doc(keys)
        batch.set(newDocRef, objectsToAddMod[keys])
    }

    return await batch.commit()
}

export const getUsers = async () => {
    const usersRef = firestore.collection('users')
    const getUsersSnapshot = await usersRef.get()
    let users = []
    
    getUsersSnapshot.forEach(doc => {
        users.push({...doc.data()})
    })
    console.log(users)
}

export const getAccounts = async () => {
    const accountsRef = firestore.collection('accounts')
    const getAccountsSnapshot = await accountsRef.get()
    let accounts = []
    
    getAccountsSnapshot.forEach(doc => {
        accounts.push({
            userId: doc.id,
            ...doc.data()
        })
    })

    console.log(accounts)
}

firebase.initializeApp(config)

export const firestore = firebase.firestore()

export default firebase