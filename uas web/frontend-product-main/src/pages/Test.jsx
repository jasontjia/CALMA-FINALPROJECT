import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar"

const Detail = () => {
  const { id } = useParams();
  const [menu, setMenu] = useState("");

  const getMenu = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/product/${id}`);
      setMenu(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <Navbar/>
  );
};

export default Detail;
