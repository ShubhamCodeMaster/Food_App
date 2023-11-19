import {getApp,getApps,initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage";


// const firebaseConfig = {
//   apiKey: "AIzaSyB4Q9Ehs5BWwoj_3dHjV3aLftPrFQ4EHEg",
//   authDomain: "food-app-97714.firebaseapp.com",
//   projectId: "food-app-97714",
//   storageBucket: "food-app-97714.appspot.com",
//   messagingSenderId: "487661094570",
//   appId: "1:487661094570:web:7f9f3bd507e7f3473832d3"
// };



const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID ,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSEAGING_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID ,
  };

const app=getApps.length > 0 ? getApp() :initializeApp(firebaseConfig);
const storage=getStorage(app);
export {app,storage};

  