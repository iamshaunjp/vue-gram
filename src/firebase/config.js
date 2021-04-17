import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAAFZiumaqIjLcNhYPyLeTzjKi4R1PIYvU",
  authDomain: "vue-firegram-test.firebaseapp.com",
  projectId: "vue-firegram-test",
  storageBucket: "vue-firegram-test.appspot.com",
  messagingSenderId: "713363456578",
  appId: "1:713363456578:web:8970e7be5c63f7f2c423db"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore, timestamp }