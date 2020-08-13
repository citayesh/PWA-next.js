import React from "react";
import Header from "../../components/header/Header.component"
import ShopPage from "../../components/shop/Shop.component";
import { GlobalStyle } from "../../styles/global.styles";

function Shop (){

    return(
    <div>
        <GlobalStyle/>
        <Header />
        <ShopPage/>

    </div>
    )
}
 
  export default Shop;