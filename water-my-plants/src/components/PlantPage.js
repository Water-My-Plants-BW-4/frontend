//This component will be the parent component 
import AddMyPlant from "./AddPlantsForm";
import PlantsCard from "./PlantsCard";
import React, {useState, useEffect } from "react";

//useState is just added as a placeholder, as we will implement context API


const PlantPage = () => {
  const [loading, setLoading] = useState(false)
  const [plantsList, setPlantList] = useState([])

//------FRONT-END I will work here--------


    return(
     <>
     {/* PlantCard component will be added here
     <PlantCard ></PlantCard>
      */}
    </>
    )
}

export default PlantPage;
