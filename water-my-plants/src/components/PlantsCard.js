import React, { useState } from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";
// import { PlantContext } from '../context/UserContext';
import styled from "styled-components";

const PlantsCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  justify-content: space-evenly;
  width: 100%;
  height: 200px;
  font-size: 30px;
  box-sizing: border-box;
  margin-top: 200px;

  h1 {
    text-align: center;
    margin: 150px 0 10px 0;
    font-size: 2.3rem;
    color: green;
  }

  h3 {
    margin: 170px 0 10px 0;
    padding-left: 150px;
    font-size: 2.3rem;
    color: green;
  }

  .childrenDiv{
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 40%;
    margin-right: 40%;
    width: auto;
    height: 400px;
  }
  button{
    margin-top: 40px;
    width: 280px;
    height: 40px;
    padding: 5px;
    text-decoration: none;
    text-align: center;
    font-size: 20px;
    color: black;
    outline: none;
    font-family: "Bebas Neue", cursive;
  }

  input, textarea{
    
    outline: none;
    border: 0;
    margin: 0;
    text-align: center;
    font-size: 20px;
   margin-top: 20px;
   width: 200px;
   height: 50px;
   transition: all 0.9s;
   background-color: transparent;

   :focus{
    border-bottom: 2px solid lightgray;
    background-color: lightgray;
    
   }
  }

`

const initialValue = {
 
	nickname: "", 
	species: "", 
	frequency_value: "", 
	frequency_range: "",
}

const PlantsCard = ({plants, fetchPlants, user}) => {
    const [newPlants, setNewPlants] = useState(initialValue);

    // const { plants } = useContext(UserContext);

    const handleChanger = (e) => {
        setNewPlants({ ...newPlants, [e.target.name]: e.target.value });
      };

      const handleSubmit = (e) => {
        console.log("your plants:", plants);
        e.preventDefault();
        axiosWithAuth()
          .post( newPlants) //I will add here the info from backend
          .then((res) => {
            console.log("The response for newPlants is:", res);
            setNewPlants(res.data);
            fetchPlants();
          })
          .catch((err) => console.log("NewPlants data error is:", err.message));
        setNewPlants({
            nickname: "", 
            species: "", 
            frequency_value: "", 
            frequency_range: "",
        });
      }; 
    
    return (
        <PlantsCardWrapper>
        <h1>Please Add A New Plant Reminder Here</h1>
        <form className="childrenDiv" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nickname"
          onChange={handleChanger}
          placeholder="Plants Name"
          value={newPlants.nickname}
        />

        <input
          type="text"
          name="species"
          onChange={handleChanger}
          placeholder="Species Name"
          value={newPlants.species}
        />

        <input
          type="number"
          name="frequency_value"
          onChange={handleChanger}
          placeholder="Frequency Value"
          value={newPlants.frequency_value}
        />

        <input
          type="text"
          name="frequency_range"
          onChange={handleChanger}
          placeholder="Frequency Range "
          value={newPlants.frequency_range}
        />

        <button>Add A New Plant Reminder</button>
      </form>

      <h3>Your New Plants Reminder are:</h3> {/* inside here after welcome goes {user.name} */}
      <>
      {plants.map((plant) => (
          <li key={plant.id}>
              <span>
                  <p>Name: {plant.nickname}</p>
                  <p>Species: {plant.species}</p>
                  <p>Frequency Value: {plant.frequency_value}</p>
                  <p>Frequency Range: {plant.frequency_range}</p>
              </span>
          </li>
      ))}
      </>
        </PlantsCardWrapper>

        
    )
};

export default PlantsCard;