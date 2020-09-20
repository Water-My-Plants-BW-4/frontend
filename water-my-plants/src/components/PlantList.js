import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import PlantsListCard from "./PlantsListCard";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PlantlistContainer = styled.div`
  margin: 20px;

  p {
    text-align: center;
    margin: 60px 0 -60px 0;
    font-size: 1.9rem;
    color: gray;
  }

  
`;

const dummyData = [{
 
	nickname: "Orchids", 
	species: "Raji", 
	frequency_value: "3", 
	frequency_range: "days",
},
{
    nickname: "Flowers", 
	species: "Red", 
	frequency_value: "5", 
	frequency_range: "days",

}]

const PlantList = () => {
  const [plantList, setPlantList] = useState(dummyData);

//   useEffect(() => {
//     axiosWithAuth()
//       .get()//use the backend here
//       .then((res) => {
//         console.log("this is the response:", res);
//         setPlantList(res.data);
//       })
//       .catch((err) => {
//         console.error("the Erros is:", err);
//       });
//   }, []);

  return (
    <PlantlistContainer>
      <ol>
        {plantList.map((plants) => (
          <PlantsListCard
            key={plants.id}
            nickname={plants.nickname}
            species={plants.species}
            frequency_value={plants.frequency_value}
            frequency_range={plants.frequency_range}

          />
        ))}
      </ol>
    </PlantlistContainer>
  );
};

export default PlantList;
