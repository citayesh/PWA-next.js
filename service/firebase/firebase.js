import firebase from "firebase/app";
import "firebase/auth";

const prodConfig = {
    apiKey: "AIzaSyD-SrLIu7v0sRpQx1Tw8t1d1rmvhN43EN0",
    authDomain: "ecommerce-77492.firebaseapp.com",
    databaseURL: "https://ecommerce-77492.firebaseio.com",
    projectId: "ecommerce-77492",
    storageBucket: "ecommerce-77492.appspot.com",
    appId: "1:1094022988415:web:fde21f517a8a70bc66754a",
    measurementId: "G-0GKT8V1FQH"
  };
  
  const devConfig = {
    apiKey: "AIzaSyD-SrLIu7v0sRpQx1Tw8t1d1rmvhN43EN0",
    authDomain: "ecommerce-77492.firebaseapp.com",
    databaseURL: "https://ecommerce-77492.firebaseio.com",
    projectId: "ecommerce-77492",
    storageBucket: "ecommerce-77492.appspot.com",
    appId: "1:1094022988415:web:fde21f517a8a70bc66754a",
    measurementId: "G-0GKT8V1FQH"
  }

  const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export default firebase;