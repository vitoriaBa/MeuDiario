
import Firebase from 'firebase'
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyClo7o0dM_njpMsptr2PXIO-1stFixP688",
  authDomain: "diariobd-1973d.firebaseapp.com",
  projectId: "diariobd-1973d",
  storageBucket: "diariobd-1973d.appspot.com",
  messagingSenderId: "338787123879",
  appId: "1:338787123879:web:3bbf61834e167588dc5182"
};
if(!Firebase.apps.length){
  Firebase.initializeApp(firebaseConfig);
}

const bdstore = Firebase.firestore();


export default bdstore;