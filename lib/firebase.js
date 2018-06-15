import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
    apiKey: process.env.Firebase_Key,
    authDomain: process.env.Firebase_AuthDomain,
    projectId: process.env.Firebase_ProjectID
}

export const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app()

export const auth = firebaseApp.auth()
