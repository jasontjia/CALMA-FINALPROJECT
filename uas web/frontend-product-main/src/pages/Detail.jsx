import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DetailDisplay from "../components/DetailDisplay";
import Card from "../components/Card";

const Detail = () => {
  const { id } = useParams();
  const [menu, setMenu] = useState("");
  const [products, setProducts] = useState([]);


  const getMenu = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/product/${id}`);
      setMenu(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    const response = await axios.get('http://localhost:5000/products');
    setProducts(response.data)
    console.log(products)
  };

  useEffect(() => {
    getMenu();
    getProducts();
  }, [id]);

  return (
    <div>
      {
        <DetailDisplay
          daerah={menu.daerah}
          OpenClose={menu.OpenClose}
          key={menu.id}
          img={menu.url}
          date={menu.date}
          name={menu.name}
          price={menu.price}
          text_desc={menu.text_desc}
          id={menu.id}
        />
      }
      <div className="w-max mx-auto space-y-5 my-10">
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">Other Recomendation</h2>
        </div>
      </div>
      <div className="flex w-max mx-auto space-x-7 mb-10">
      {
        products.map((item) => (
          <Card 
          daerah={item.daerah}
          OpenClose={item.OpenClose}
          img={item.url}
          date={item.date}
          name={item.name}
          price={item.price}
          text_desc={item.text_desc}
          id={item.id}
          />
        ))
      }
      </div>
    </div>
  )
}

export default Detail;
