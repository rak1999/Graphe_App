import React from 'react'
import Cart_logo from "../Images/cart.png"

const Cart = (props) => {
  return (
    <div id='cart'>
        <img id='cart_logo' src={Cart_logo} alt="Cart"/>
        <h2 id='total_items'>{props.addItem}</h2>
    </div>
  )
}

export default Cart