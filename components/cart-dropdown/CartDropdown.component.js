import React from "react";
import {
    CartDropdownContainer,
    CartDropdownButton,
    EmptyMessageContainer,
    CartItemsContainer
  } from "./CartDropdown.style";
import { useSelector, useDispatch } from "react-redux";
import {selectCartItems} from "../../redux/cart/cart.selectors"
import CartItem from "../cart-item/CartItem.componenet";
import {toggleCartHidden} from "../../redux/cart/cart.action"
import { useRouter } from "next/dist/client/router";


function CartDropdown(){
const cartItems=useSelector(state=>selectCartItems(state));
const dispatch =useDispatch();
const router =useRouter();
    return(
    <CartDropdownContainer>
            <CartItemsContainer>
                {
                cartItems.length ?
               (cartItems.map(cartItem=>
                <CartItem key={cartItem.id} item={cartItem}/>))
                :
            (
                <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
            )

                }
            </CartItemsContainer>
            <CartDropdownButton onClick={()=>{router.push('/checkout')
        dispatch(toggleCartHidden())
        }}>GO TO CHECKOUT</CartDropdownButton>   
    </CartDropdownContainer>
    )}
export default CartDropdown;