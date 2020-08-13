import firebase from "firebase/app";  
import { auth } from './firebase';
import 'firebase/firestore';


// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
 auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// Sign out
export const doSignOut = () =>
  auth.signOut();

//Sign in with google
  export const firestore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:"select_account"});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);


//create user profile document

export const createUserProfileDocument=async (userAuth, additionalData)=>{
  if(!userAuth) return;
 const userRef= firestore.doc(`users/${userAuth.uid}`);
 const snapShot= await userRef.get();
  if (!snapShot.exists){
      const {displayName,email}=userAuth;
      const createdAt=new Date();
  try{
      userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
          })
      }catch(error){
alertl(error.message)
      }
  }
  return userRef;
}