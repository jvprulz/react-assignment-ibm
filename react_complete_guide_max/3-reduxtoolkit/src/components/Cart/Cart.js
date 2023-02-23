import React, {Fragment, useState} from "react";
import { useSelector } from "react-redux";
import CartItems from "./CartItem";

const Cart = () => {
  const cartSlice = useSelector(state => state.cart);
  const [showCart, setShowCart] = useState(false);
  let itemList = "";
  const showCartHandler = () => {
    setShowCart(state => !state);
  };
  if (showCart) {
    const items = cartSlice.cartItems;
    if(items.length > 0) {
      itemList = items.map(item => <CartItems key={item.id} name={item.name} price={item.price}/>);
    } else {
      itemList = "No Items in Cart";
    }
  }
  return (
    <Fragment>
      <button onClick={showCartHandler}> Show Cart</button>
      {showCart && 
                <div className='cart_list'>
                  {itemList}
                  <button className='cart_list--hide_cart' onClick={showCartHandler}> Hide Cart </button>
                </div>
      }
    </Fragment>
  )
}

export default Cart;