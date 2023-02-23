import React from "react";
import {useDispatch} from "react-redux";
import {cartAction} from "../store/CartReducer";
import "./ProductList.css";
import AddProduct from "./AddProduct";

const ProductList = (props) => {
  const dispatch = useDispatch();
  const addToCartHandler = (event) => {
    event.preventDefault();
    const item = {
      id: props.id,
      name: props.name,
      description: props.description,
      price: props.price
    };
    dispatch(cartAction.addToCart({type:"add_to_cart", item}));
  }
  return (
    <div className='product_list'>
      <h2>{props.name}</h2>
      <span>{props.description}</span>
      <AddProduct addToCartHandler={addToCartHandler} />
      <span className='product_list--price'>${props.price.toFixed(2)}</span>
    </div>
  );
}

export default ProductList;