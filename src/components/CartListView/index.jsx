import CartItem from '../CartItem'
import {use} from 'react'
import CartContext from '../../context/CartContext'
import './index.css'




const CartListView = () => {
  const value =use(CartContext)
  const {cartList}=value
  console.log('cart',cartList)
  return(
    <ul className="cart-list">
    {cartList.map(eachCartItem => (
     <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
      
    ))}
  </ul>
  )
}
export default CartListView
 