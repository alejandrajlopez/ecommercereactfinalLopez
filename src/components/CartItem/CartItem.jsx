import React from "react";
import { useCartContext } from "../CartContext/CartContext";

const CartItem = ({ dataItem }) => {
  const { removeItem } = useCartContext();

  const PrecioTotal = (precio, cantidad) => {
    return precio * cantidad;
  };

  return (
    <tbody>
      <tr>
        <td>
          <img
            className="img-fluid w-100 text-center img-cart-item"
            src={dataItem.image}
            alt={dataItem.title}
          ></img>
        </td>
        <td>{dataItem.title}</td>
        <td className="text-center">{dataItem.price}</td>
        <td className="text-center">{dataItem.cantidad}</td>
        <td className="text-center">
          {PrecioTotal(dataItem.price, dataItem.cantidad)}
        </td>
        <td className="text-center">
          <button
            className="btn fas fa-trash-alt text-center"
            onClick={() => removeItem(dataItem.id)}
          >
            x
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default CartItem;
