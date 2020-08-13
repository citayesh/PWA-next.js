import React,{useEffect} from 'react';
import Header from "../components/header/Header.component"
import HomePage from '../components/home/Home.component.js.js';
import { GlobalStyle } from '../styles/global.styles';
import {useDispatch} from "react-redux";
import { fetchCollectionsStartAsync } from "../redux/shop/shop.action";
import { setCurrentUser } from '../redux/user/user.action';
import{auth} from "../service/firebase/firebase";
import{createUserProfileDocument} from "../service/firebase/auth"


function App (){
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchCollectionsStartAsync()) 
    let unsubscribeFromAuth =true
    if(unsubscribeFromAuth){
  auth.onAuthStateChanged(async userAuth => {
  dispatch(setCurrentUser(userAuth))
  if (userAuth) {
    const userRef = await createUserProfileDocument(userAuth);
    userRef.onSnapshot(snapShot => {
      dispatch(setCurrentUser({
        id: snapShot.id,
        ...snapShot.data()
      })
     ) })
    }
})
    }
    return ()=>unsubscribeFromAuth=false
   },[dispatch])
  

    return (
      <div>
      <GlobalStyle/>
       <Header/>
       <HomePage />
      </div>
    );
  
  }  
  
  export default App;