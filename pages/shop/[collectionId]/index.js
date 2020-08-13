import React from "react";
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer} from './Collection.style';
import { useSelector } from "react-redux";
import {selectCollection} from "../../../redux/shop/shop.selectors"
import CollectionItem from "../../../components/collection-item/CollectionItem.component";
import { useRouter } from 'next/router';
import Header from "../../../components/header/Header.component";
import {GlobalStyle} from "../../../styles/global.styles"
import Spinner from "../../../components/spinner/Spinner.componet"


const CollectionPage = () => {
    const router=useRouter();
    const {collectionId} =router.query;
    const collection=useSelector(selectCollection(collectionId));
    if(collection){
    const {title,items}=collection;
    return (
        <div>
        <GlobalStyle/>
        <Header/>    
        <CollectionPageContainer>
        <CollectionTitle >{title}</CollectionTitle>
        <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
        </CollectionItemsContainer>
      </CollectionPageContainer>
      </div>
      );
    }else{
      return(
        <Spinner/>
      )
    }
  }

    export default CollectionPage;