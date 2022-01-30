import React, { useEffect, useState } from "react";
//componentes
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";
//Firebase
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { Id } = useParams();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const obtenerDatos = async () => {
      const docRef = doc(db, "products", Id);
      const docSnap = await getDoc(docRef);
      console.log(docSnap.id);
      setData({ ...docSnap.data(), id: docSnap.id });
    };

    obtenerDatos();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [Id]);

  return <>{isLoading ? <Loading /> : <ItemDetail Item={data} />}</>;
};

export default ItemDetailContainer;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// //compoenentes
// import ItemDetail from "../ItemDetail/ItemDetail";
// import Loading from "../Loading/Loading";

// const ItemDetailContainer = ({ match }) => {
//   let id = match.params.id;

//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     axios(`https://fakestoreapi.com/products/${id}`).then((res) =>
//       setData(res.data)
//     );
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 1000);
//   }, [id]);

//   return <>{isLoading ? <Loading /> : <ItemDetail Item={data} />}</>;
// };

// export default ItemDetailContainer;
