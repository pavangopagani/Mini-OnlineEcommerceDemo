import React from 'react'
//import Cart from '../components/Cart'
const CartContext = React.createContext({
    cartList:[
        
  {
    title:"product 1",
    brand:"Brand Name",
    id:1001,
    imageUrl:'https://assets.ccbp.in/frontend/react-js/sample-product-img.jpg',
    price:760,
    quantity:5,
  },

  {
    title:"product 2",
    brand:"Brand Name",
    id:1002,
    imageUrl:'https://assets.ccbp.in/frontend/react-js/sample-product-img.jpg',
    price:760,
    quantity:2,
  }

    ],
    addCartItem:()=>{},
    deleteCartItems:()=>{},
})

export default CartContext