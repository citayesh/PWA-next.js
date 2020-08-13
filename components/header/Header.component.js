import React from "react";
import {
  HeaderContainer,
  OptionsContainer,
  OptionLink,
  LogoContainer,
  Logoref,
  OptionSign
} from  "./Header.style";
import Logo from "../../static/crown.svg";
import Link from 'next/link'
import CartIcon from "../cart-icon/CartIcon.component"
import CartDropdown from "../cart-dropdown/CartDropdown.component";
import {useSelector, useDispatch } from 'react-redux';
import {selectCartHidden} from "../../redux/cart/cart.selectors"
import {selecetCurrentUser} from "../../redux/user/user.selector"
import {setCurrentUser} from "../../redux/user/user.action";
import { useRouter } from "next/dist/client/router";
import {doSignOut} from "../../service/firebase/auth"
import{auth } from "../../service/firebase/firebase"

function Header(){
  const currentUser=useSelector(state=>selecetCurrentUser(state));
  const hidden=useSelector(state=>selectCartHidden(state));
  const dispatch=useDispatch();
  const router=useRouter();
   return (
    <HeaderContainer>
    <LogoContainer>
     <Link href="/">
       <Logoref>
      <Logo/>
      </Logoref>
      </Link>
    </LogoContainer>
    <OptionsContainer>
      <Link href='/shop'>
       <OptionLink>SHOP</OptionLink>
      </Link>
      <Link href='/checkout'>
      <OptionLink>CONTACT</OptionLink>
     </Link>
      {currentUser ? (
        <OptionSign onClick={()=>{
        auth.signOut()
        dispatch(setCurrentUser(null))}}>
          SIGN OUT
        </OptionSign>
      ) : (
        <OptionSign onClick={()=>router.replace('/signinup')} >
          SIGN IN
        </OptionSign>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
   )
};

export default Header;
