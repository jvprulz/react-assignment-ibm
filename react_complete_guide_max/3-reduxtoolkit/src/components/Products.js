import React from "react";
import ProductList from "./ProductsList";

const Products = () => {
  const productslist = [
    {
      id: 1,
      name: "Denim Jeans",
      description: "Jeans pant size S, M, L, XL, XXL",
      price: 797
    },
    {
      id: 2,
      name: "Laptop",
      description: "i7 8gb RAM",
      price: 1249
    },
    {
      id: 3,
      name: "Mobile Phone",
      description: "5000 MAH Battery Life",
      price: 4783
    }
  ];
  const products = productslist.map(product => 
    <ProductList 
      key = {product.id}
      id = {product.id}
      name = {product.name}
      description = {product.description}
      price = {product.price}
    />
  );

  return (
    <div>{products}</div>   
  );
}

export default Products;