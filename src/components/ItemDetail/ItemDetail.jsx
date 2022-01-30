import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Card, Image } from "semantic-ui-react";
import { useCartContext } from "../CartContext/CartContext";

const ItemDetail = ({ Item }) => {
  const [product, setProduct] = useState(0);

  const { addItemCart } = useCartContext();

  //Creo la funcion onAdd
  const onAdd = (p) => {
    setProduct(p);
    addItemCart(Item, p);
  };

  return (
    <>
      <div className="itemDetail">
        <div className="itemDetailcontent">
          <h1>{Item.title}</h1>
          <img
            className="itemDeailImg"
            src={Item.image}
            alt="{ Item.title}"
          ></img>
          <p>
            <b>Descripcion: </b> {Item.description}
          </p>
          <p>
            <b>Categoria: {Item.category}</b>
          </p>
          <span>
            <b>Precio: USD {Item.price}</b>
          </span>
        </div>
        <div className="itemDetailItemCount">
          {product > 0 ? (
            <Card
              style={{
                height: "220px",
                width: "250px",
                margin: "50px 0 0 0",
              }}
            >
              <Card.Content>
                <Image floated="right" size="mini" src={Item.image} />
                <Card.Header>{Item.title}</Card.Header>
                <Card.Meta>{Item.category}</Card.Meta>
                <Card.Description>
                  Cantidad de productos seleccionados: {product}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Link to="/cart">
                    <Button variant="dark" className="mx-2">
                      Comprar
                    </Button>
                  </Link>
                </div>
              </Card.Content>
            </Card>
          ) : (
            <ItemCount stock="5" initial="0" onAdd={onAdd} />
          )}
        </div>
      </div>
    </>
  );
};

export default ItemDetail;

// import React, { useState } from "react";
// import ItemCount from "../ItemCount/ItemCount.jsx";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./ItemDetail.css";
// import { Link } from "react-router-dom";
// import { Button } from "react-bootstrap";
// import { Card, Image } from "semantic-ui-react";
// import { useCartContext } from "../CartContext/CartContext";

// const ItemDetail = ({Item }) => {
//   const [product, setProduct] = useState(0);

//   const { addItemCart } = useCartContext();

//   //Creo la funcion onAdd
//   const onAdd = (p) => {
//     setProduct(p);
//     addItemCart(Item, p);
//   };

//   return (
//     <>
//       <div className="itemDetail">
//         <div className="itemDetailcontent">
//           <h1>{Item.title}</h1>
//           <img
//             className="itemDeailImg"
//             src={Item.image}
//             alt="{ Item.title}"

//           ></img>
//           <p>
//             <b>Descripcion: </b> {Item.description}
//           </p>
//           <p>
//             <b>Categoria: {Item.category}</b>
//           </p>
//           <span>
//             <b>Precio: USD {Item.price}</b>
//           </span>
//         </div>
//         <div className="itemDetailItemCount">
//           {product > 0 ? (
//             <Card
//               style={{
//                 height: "220px",
//                 width: "250px",
//                 margin: "50px 0 0 0",
//               }}
//             >
//               <Card.Content>
//                 <Image floated="right" size="mini" src={Item.image} />
//                 <Card.Header>{Item.title}</Card.Header>
//                 <Card.Meta>{Item.category}</Card.Meta>
//                 <Card.Description>
//                   Cantidad de productos seleccionados: {product}
//                 </Card.Description>
//               </Card.Content>
//               <Card.Content extra>
//                 <div className="ui two buttons">
//                   <Link to="/cart">
//                     <Button variant="dark" className="mx-2">
//                       Comprar
//                     </Button>
//                   </Link>
//                 </div>
//               </Card.Content>
//             </Card>
//           ) : (
//             <ItemCount stock="5" initial="0" onAdd={onAdd} />
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ItemDetail;
