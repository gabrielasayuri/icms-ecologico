import firebase from 'firebase'
import Rebase from 're-base'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD5MAkUkFCpLMpqfuvMEr-IMWsA82H2_1k",
    authDomain: "icmsecologico2018.firebaseapp.com",
    databaseURL: "https://icmsecologico2018.firebaseio.com",
    projectId: "icmsecologico2018",
    storageBucket: "icmsecologico2018.appspot.com",
    messagingSenderId: "154220324237"
  };

const app = firebase.initializeApp(config);

const base = Rebase.createClass( app.database() ) // banco de dados
const auth = firebase.auth() // autencicaão

export { auth, base }