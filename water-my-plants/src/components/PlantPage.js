//This component will be the parent component 
//which will display PlantList component as well as the AddMyPlant component
import React, {useState, useEffect } from "react";
import axios from "axios";

//useState is just added as a placeholder, as we will implement context API


const PlantPage = () => {
  const [loading, setLoading] = useState(false)
  const [plantsList, setPlantList] = useState([])

//------FRONT-END I will work here--------


    return(
     <>
     {/* PlantCard component will be added here
     <PlantCard component></PlantList>
      */}
    </>
    )
}

export default PlantPage;
