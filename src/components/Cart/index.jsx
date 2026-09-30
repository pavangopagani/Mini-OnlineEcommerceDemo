import Header from '../Header'
import CartListView from '../CartListView'
import EmptyCartView from "../EmptyCartView";
import './index.css'
import CartContext from '../../context/CartContext'
import {use} from 'react'
const Cart = () => {
  const value=use(CartContext)
  const {cartList}=value
  const empty=cartList.length ===0
  return(
    <>
     <Header />
    <div className="cart-container">
      <div className="cart-content-container">
        <h1 className="cart-heading">My Cart</h1>
         {
          empty?(<EmptyCartView />):(<CartListView/>)
         }
      </div>
    </div>
    
    </>
  )


}
  



export default Cart
