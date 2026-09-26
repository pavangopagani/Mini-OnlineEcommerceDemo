import React from 'react'
import Cart from '../components/Cart'
const CartContext = React.createContext({
    cartList:[],
    addCartItem:()=>{},
    deleteCartItems:()=>{},
})

export default CartContext