import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ShowAll from "../components/ShowAll";

const Detail = () => {
  const { id } = useParams();
  const [Recomendation, setRecomendation] = useState([]);

  const getRecomendation = async () => {
    const response = await axios.get('http://localhost:5000/recomendation');
    setRecomendation(response.data)
    console.log(Recomendation)
  };

  useEffect(() => {
    getRecomendation();
  }, []);

  return(
    <div>
      <div className="pt-[70px]">
      {
        Recomendation.map((item) =>(
        <ShowAll
          OpenClose={item.OpenClose}
          daerah={item.daerah}
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
};

export default Detail;
