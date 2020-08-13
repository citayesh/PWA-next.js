import React, { useState } from 'react';
import {SignInContainer,SignInTitle,ButtonsBarContainer} from "./Signin.style"
import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.component';
import {doSignInWithEmailAndPassword,signInWithGoogle} from "../../service/firebase/auth"
import { useRouter } from 'next/dist/client/router';

function Signin(){
    const [state, setState] = useState({ email: "", password: "" });
    function handleChange(event){
        const {name,value}=event.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    }
    async function handleSubmit(event){
        const {email,password}=state;
       doSignInWithEmailAndPassword(email, password).then(
       )
      .catch(error => {
        alert(error);
      });

    event.preventDefault();
  };
    return(
<SignInContainer>
    <SignInTitle>I allready have an account</SignInTitle>
    <span>Sign in with your email and password</span>
    <form onSubmit={handleSubmit}>
    <FormInput 
    name="email"
     value={state.email} 
     type="email"
     lable="Email"
     handleChange={handleChange}
     required />
    <FormInput 
    name="password" 
    value={state.password} 
    type="password" 
    lable="Password"
    handleChange={handleChange} 
    required />
    <ButtonsBarContainer>
    <CustomButton type="submit">SIGN IN</CustomButton>
    <CustomButton onClick={signInWithGoogle}  isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
    </ButtonsBarContainer>
    </form>
</SignInContainer>
)
}

export default Signin;
