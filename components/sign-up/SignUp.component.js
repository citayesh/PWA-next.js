import React, { useState} from 'react';
import CustomButton from '../custom-button/CustomButton.component';
import FormInput from '../form-input/FormInput.component';
import {createUserProfileDocument ,doCreateUserWithEmailAndPassword} from "../../service/firebase/auth"
import {SignUpTitle,SignUpContainer} from './SignUp.style';
import { useRouter } from 'next/dist/client/router';
import {auth } from "../../service/firebase/firebase"
function SignUp(){
const [state,setState]=useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''})

    async function handleSubmit(event) {
    const { displayName, email, password, confirmPassword } =state;
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
       doCreateUserWithEmailAndPassword(
        email,
        password
      ).then(authUser => {
        const {user}=authUser;
       createUserProfileDocument(user, { displayName });
       setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
      })
    }).catch(error => {
        alert(error);
      })
    event.preventDefault();

  };

  function handleChange(event) {
    const { name, value } = event.target;

    setState(prevState => ({ ...prevState, [name]: value }));

  };
    const { displayName, email, password, confirmPassword } =state;
    return (
      <SignUpContainer>
        <SignUpTitle>I do not have a account</SignUpTitle>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={handleChange}
            lable='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            lable='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            lable='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            lable='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </SignUpContainer>
    );
  }

export default SignUp;