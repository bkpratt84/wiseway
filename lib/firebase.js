import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDtSOID9xg-yfKK_Vlo_pBZC5ckKG9rzJ4",
    authDomain: "wiseway-91113.firebaseapp.com",
    projectId: "wiseway-91113"
}

export const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app()

export const auth = firebaseApp.auth()
