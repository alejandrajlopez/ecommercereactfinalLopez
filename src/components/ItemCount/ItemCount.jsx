import React, { useState } from "react";
import "./ItemCount.css";
import { Button } from "react-bootstrap";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [product, setProduct] = useState(Number(initial));
  const [nuevoStock, setNuevoStock] = useState(stock);

  const Decrementar = () => {
    if (product > 0) {
      setProduct(product - 1);
      setNuevoStock(nuevoStock + 1);
    }
  };
  const Incrementar = () => {
    if (stock > product && nuevoStock > 0) {
      setProduct(product + 1);
      setNuevoStock(nuevoStock - 1);
    } else {
      console.log("Stock agotado");
    }
  };

  const add = (product) => {
    if (product > 0) {
      setProduct(product - nuevoStock);
      setNuevoStock(nuevoStock - product);
      //Llamo como prop y uso la funcion onAdd
      onAdd(product);
      setProduct(0);
      console.log(`Cantidad de productos seleccionados: ${product}`);
    }
    console.log(`Stock disponible (actualmente): ${nuevoStock}`);
  };

  return (
    <>
      <div className="btnContainer">
        <p className="parrafoBtn">Stock disponible: {nuevoStock}</p>
        <Button
          className="btn"
          variant="outline-warning"
          onClick={Incrementar}
          disabled={product === Number(stock)}
        >
          {" "}
          Agregar
        </Button>
        <p className="parrafoBtn">{product}</p>
        <Button
          className="btn"
          variant="outline-warning"
          onClick={Decrementar}
          disabled={product === 1}
        >
          {" "}
          Quitar
        </Button>
      </div>
      <Button className="btn" variant="outline" onClick={() => add(product)}>
        Agregar al carrito
      </Button>
    </>
  );
};

export default ItemCount;
