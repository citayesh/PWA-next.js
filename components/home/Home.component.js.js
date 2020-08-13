import React,{useEffect,useState} from 'react';
import {HomePageContainer,DirectoryMenuContainer} from "./HomePage.style";
import MenuItem from '../menuItem/MenuItem.componet';
import axios from "axios";

function HomePage(){
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get(`https://my-json-server.typicode.com/citayesh/menu-api/db`)
      .then(res => {
         setData(res.data.menu)})
         
  },[])
    return(
    <HomePageContainer>
      <DirectoryMenuContainer>
   { data.map(({id,...otherDataProps})=>
    <MenuItem key={id} {...otherDataProps}/>)
   }
</DirectoryMenuContainer>
    </HomePageContainer>
    )

    }
   

    
    export default HomePage;