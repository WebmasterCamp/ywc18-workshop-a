import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged, signInAnonymously } from 'firebase/auth'

import { createProfileIfNotExist } from './profile'

const firebaseConfig = {
  apiKey: 'AIzaSyAk1l-ftV2XmeDKsOJsKefD4RatAP6QFZ0',
  authDomain: 'ywc18-workshop-a.firebaseapp.com',
  databaseURL:
    'https://ywc18-workshop-a-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'ywc18-workshop-a',
  storageBucket: 'ywc18-workshop-a.appspot.com',
  messagingSenderId: '624427894045',
  appId: '1:624427894045:web:17da450d90b4c88e124df4',
}

export function initFirebase() {
  initializeApp(firebaseConfig)
  const auth = getAuth()
  signInAnonymously(auth)
  onAuthStateChanged(auth, (user) => {
    if (user) {
      createProfileIfNotExist(user.uid)
    }
  })
}
