import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
const ItemListContainer = ({ title }) => {
  return (
    <>
      <div className="greetingContainer">
        <h1>{title}</h1>
      </div>
      <div className="itemListContainer">
        <ItemList />
      </div>
    </>
  );
};

export default ItemListContainer;
