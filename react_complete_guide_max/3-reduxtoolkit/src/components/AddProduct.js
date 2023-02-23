import React from "react";

const AddProduct = (props) => {
  return (
    <button className='product_list--add_to_cart' onClick={props.addToCartHandler}> Add To Cart </button>
  )
}

export default AddProduct;