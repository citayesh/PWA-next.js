import React  from 'react';
import {
    MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    ContentTitle,
    ContentSubtitle
  } from "./MenuItem.style"
import { useRouter } from 'next/dist/client/router';


function MenuItem({title,imageUrl,size,linkUrl}){
  const router=useRouter();
  
  return(
  <MenuItemContainer size={size}
onClick={()=>{router.push(`/${linkUrl}`)}}>
  <BackgroundImageContainer 
  className='background-image'
  imageUrl={imageUrl}/>
  <ContentContainer className='content'>
  <ContentTitle>{title.toUpperCase()}</ContentTitle>
  <ContentSubtitle>SHOP NOW</ContentSubtitle>
  </ContentContainer>
  </MenuItemContainer>
)
}


export default MenuItem;
