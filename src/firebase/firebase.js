import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'

const config = {
    apiKey: 'AIzaSyAJpDpa7LO8IqdJpT6sImySj_K85ObfjrQ',
    authDomain: 'dwd-intake.firebaseapp.com',
    databaseURL: 'https://dwd-intake.firebaseio.com',
    projectId: 'dwd-intake',
    storageBucket: 'dwd-intake.appspot.com',
    messagingSenderId: '553102857797'
}

if (!firebase.apps.length) {
    firebase.initializeApp(config)
}

const auth = firebase.auth()
const db = firebase.database()

export {
    auth,
    db
}