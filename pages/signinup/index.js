import React, { useEffect } from 'react';
import {SignInAndSignUpContainer} from "./SigninUp.style"
import Signin from '../../components/sign-in/Signin.component';
import SignUp from "../../components/sign-up/SignUp.component"
import {GlobalStyle } from "../../styles/global.styles"
import Header from "../../components/header/Header.component"
import { selecetCurrentUser } from '../../redux/user/user.selector';
import { useRouter } from 'next/dist/client/router';
import {useSelector} from 'react-redux';

function SigninUp(){
const currentUser=useSelector(state =>selecetCurrentUser(state))
const router=useRouter(); 
 useEffect(()=>{
if(currentUser){     
router.replace('/')
}
 },[currentUser])

    return(
<div>
<GlobalStyle/>    
<Header/>
<SignInAndSignUpContainer>
<Signin/>
<SignUp/>
</SignInAndSignUpContainer>
</div>    
)
    }



export default SigninUp;
