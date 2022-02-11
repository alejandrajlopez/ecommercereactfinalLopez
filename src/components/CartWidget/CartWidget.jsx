import React from "react";
import "./CartWidget.css";

import { useCartContext } from "../CartContext/CartContext";

import { AiOutlineShoppingCart } from "react-icons/ai";

const CartWidget = () => {

  const { cart } = useCartContext();


  return (
    <>
      <AiOutlineShoppingCart className="mt-3 text-light" />
    
      <span className="text-light">{cart.length}</span>
    </>
  );
};

export default CartWidget;
