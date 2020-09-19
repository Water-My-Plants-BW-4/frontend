import React, { useState } from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";
// import { UserContext } from '../context/UserContext';

const initialValue = {
 
	nickname: "", 
	species: "", 
	frequency_value: "", 
	frequency_range: "",
}

const PlantsCard = ({plants, fetchPlants, user}) => {
    const [newPlants, setNewPlants] = useState(initialValue);

    // const { user } = useContext(UserContext);

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
        <>
        <h1>Please Add A New Plant Reminder Here</h1>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nickname"
          onChange={handleChanger}
          placeholder="Enter Plants Name"
          value={newPlants.nickname}
        />

        <input
          type="text"
          name="species"
          onChange={handleChanger}
          placeholder="Enter Species Name"
          value={newPlants.species}
        />

        <input
          type="number"
          name="frequency_value"
          onChange={handleChanger}
          placeholder="Enter how much frequency value"
          value={newPlants.frequency_value}
        />

        <input
          type="text"
          name="frequency_range"
          onChange={handleChanger}
          placeholder="Enter how much frequency range "
          value={newPlants.frequency_range}
        />

        <button>Add A New Plant Reminder</button>
      </form>

      <h3>Welcome  Your New Plants Reminder</h3> {/* inside here after welcome goes {user.name} */}
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
        </>

        
    )
};

export default PlantsCard;