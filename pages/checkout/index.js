import React from 'react';
import Header from '../../components/header/Header.component';
import CheckoutPage from "../../components/chekcout/CheckoutPage.component"
import {GlobalStyle} from "../../styles/global.styles"

function Chekout(){
 
    return(
        <div>
            <GlobalStyle/>
            <Header/>
            <CheckoutPage/>
            </div>
    )

    }
   

    
    export default Chekout;