import React,{useEffect} from 'react';
import Header from "../components/header/Header.component"
import HomePage from '../components/home/Home.component.js.js';
import { GlobalStyle } from '../styles/global.styles';
import {useDispatch} from "react-redux";
import { setCurrentUser } from '../redux/user/user.action';
import{auth} from "../service/firebase/firebase";
import{createUserProfileDocument} from "../service/firebase/auth"
import {fetchCollectionsSuccess} from "../redux/shop/shop.action"
import{wrapper}from "../redux/store";
import axios from "axios"

   

function App({collectionMap}){
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchCollectionsSuccess(collectionMap)) 
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

  export const getServerSideProps = async () => {
    const res=await axios.get(`https://my-json-server.typicode.com/citayesh/product-api/SHOP_DATA`)
 const collectionMap=res.data; 
    return {
      props: {
        collectionMap,
      },
    }
  }
  

export default App;