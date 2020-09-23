import React, { useContext } from "react";
import PlantsListCard from "./PlantsListCard";
import styled from "styled-components";
import { PlantsContext } from "../context/PlantsContext"

import axiosWithAuth from "../utils/axiosWithAuth";
const PlantlistContainer = styled.div`
display: flex;
justify-content: center;
  margin: 20px;

  p {
    text-align: center;
    margin: 60px 0 -60px 0;
    font-size: 1.9rem;
    color: black;
  }
}

.btn{
  display: flex;
  justify-content: center;
}
.updBtn{
  margin-right: 10px;
}
  
`;


const PlantList = () => {
  const {plantList} = useContext(PlantsContext)
<<<<<<< HEAD:src/components/PlantList.js

=======
>>>>>>> dev:water-my-plants/src/components/PlantList.js

  return (
    <>
    <PlantlistContainer>
      <ol>
        {plantList.map((plants, i) => (
          <div key={i}>
          <PlantsListCard
            i={i}
            id={plants.id}
            nickname={plants.nickname}
            species={plants.species}
            frequency_value={plants.frequency_value}
            frequency_range={plants.frequency_range}  
            />
       </div>
  
        ))}
      </ol>
      
    </PlantlistContainer>
   
    
     </>
  );
};

export default PlantList;
