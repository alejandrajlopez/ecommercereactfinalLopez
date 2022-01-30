import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import "./ItemList.css";
import "bootstrap/dist/css/bootstrap.min.css";
//Spinner
import Loading from "../Loading/Loading";
//React-Router-DOM
import { Link, useParams } from "react-router-dom";
//Firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const ItemList = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const obtenerDatos = async () => {
      const docs = [];
      const datos = await getDocs(collection(db, "products"));
      datos.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
        categoryId
          ? setProducts(docs.filter((e) => e.category === categoryId))
          : setProducts(docs);
      });
    };
    obtenerDatos();
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [categoryId]);

  return (
    <>
      {IsLoading === false ? (
        <div className="divCardContainer">
          {products.map((e) => {
            return (
              <div key={e.id}>
                <Link to={`/Item/${e.id}`}>
                  <Item array={e} />
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ItemList;
