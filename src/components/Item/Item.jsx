import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./Item.css";

// PropTypes
import propTypes from "prop-types";

const Item = ({ array }) => {
  return (
    <Card>
      <Image className="cardImage" src={array.image} />
      <Card.Content className="card-Content">
        <Card.Header className="CardHeader">{array.title}</Card.Header>
        <Card.Description className="card-Description">
          <span>{array.category}</span>
        </Card.Description>
        <Card.Description>
          <p>Precio: USD {array.price}</p>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};
//Validacion de PropTypes
Item.propTypes = {
  image: propTypes.string,
  title: propTypes.string,
  category: propTypes.string,
  price: propTypes.number,
};

export default Item;
