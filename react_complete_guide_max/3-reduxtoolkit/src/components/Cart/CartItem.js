import React from "react";
import "./CartList.css";

const CartItems = (props) => {
  return (
    <div>
      <span>{props.name}</span>
      <span className='cart_list--price'>${props.price.toFixed(2)}</span>
    </div>
  );
}

export default CartItems;