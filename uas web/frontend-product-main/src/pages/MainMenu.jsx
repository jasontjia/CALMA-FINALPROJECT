import React, {useEffect, useState} from "react";
import axios from "axios";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const MainMenu = () => {
  const [Recomendation, setRecomendation] = useState([]);
  const [Popular, setPopular] = useState([]);
  const [New, setNew] = useState([]);


  const getRecomendation = async () => {
    const response = await axios.get('http://localhost:5000/recomendation');
    setRecomendation(response.data)
    console.log(Recomendation)
  };

  const getPopular = async () => {
    const response = await axios.get('http://localhost:5000/popular');
    setPopular(response.data)
  };

  const getNew = async () => {
    const response = await axios.get('http://localhost:5000/new');
    setNew(response.data)
  };

  useEffect(() => {
    getRecomendation();
    getPopular();
    getNew();
  }, [])

  return(
    <div className="w-[1200px] mx-auto mt-7 space-y-5 my-5">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold">Recomendation</h2>
        <p className="font-medium underline underline-offset-2 hover:text-[#3134d9]"><Link to={`/recomendation`} className="">Show all</Link></p>
      </div>
      <div className="flex w-max mx-auto space-x-7">
      {
        Recomendation.map((item) => (
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
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold">Popular</h2>
        <p className="font-medium underline underline-offset-2 hover:text-[#3134d9]"><Link to={`/popular`} className="">Show all</Link></p>
      </div>
      <div className="flex w-max mx-auto space-x-7">
      {
        Popular.map((item) => (
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
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold">New</h2>
        <p className="font-medium underline underline-offset-2 hover:text-[#3134d9]"><Link to={`/new`} className="">Show all</Link></p>
      </div>
      <div className="flex w-max mx-auto space-x-7">
      {
        New.map((item) => (
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

export default MainMenu;
