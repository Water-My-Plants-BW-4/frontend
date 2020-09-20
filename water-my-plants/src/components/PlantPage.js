//This component will be the parent component
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PlantList from "./PlantList";

const PlantsListWrapper = styled.div`


h1 {
  text-align: center;
  margin: 60px 0 10px 0;
  font-size: 2.3rem;
  color: green;
}

  .main-buttons {
    display: flex;
    justify-content: space-around;
    padding: 10px 10px;
  }
  button {
    margin: 30px 0 0 0;
    width: 240px;
    height: 30px;
    padding: 0 0 30px 0;
    text-decoration: none;
    text-align: center;
    font-size: 20px;
    color: black;
    outline: none;
    font-family: "Bebas Neue", cursive;
  }
`;

//useState is just added as a placeholder, as we will implement context API

const PlantPage = () => {
  const [loading, setLoading] = useState(false);
  const [plantsList, setPlantList] = useState([]);

  //------FRONT-END I will work here--------
  

  return (
    <PlantsListWrapper>
      <div className="main-buttons">
        <Link to="/addPlants">
          <div>
            <button>Add Plant Reminders</button>
          </div>
        </Link>
        <Link to="/userInfo">
          <div>
            <button>User Profile</button>
          </div>
        </Link>
      </div>
      <h1>User's Plant Reminder List</h1>
      {/* PlantCard component will be added here
     <PlantCard ></PlantCard>
      */}
      <PlantList />
    </PlantsListWrapper>
  );
};

export default PlantPage;
