import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";

const PlantsCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  justify-content: space-evenly;
  width: 100%;
  font-size: 30px;
  box-sizing: border-box;
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

  .childrenDiv {
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
  button {
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

  input,
  textarea {
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

    :focus {
      border-bottom: 2px solid lightgray;
      background-color: lightgray;
    }
  }
`;

const initialValue = {
 
  user_id: localStorage.getItem("userID"),
  nickname: "",
  species: "",
  frequency_value: "",
  frequency_range: "",
};

const PlantsCard = ({ plants }) => {
  const [newPlant, setNewPlant] = useState(initialValue);
  const { push } = useHistory();
 

  const handleChanger = (e) => {
    setNewPlant({ ...newPlant, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log("your plants:", plants);
    e.preventDefault();
    console.log("newPlant", newPlant)
    axiosWithAuth()
      .post("/plants", newPlant)
      .then((res) => {
        console.log("The response for newPlants is:", res);
        setNewPlant(res.data);
        push("/myplant");
      })
      .catch((err) => console.log("NewPlants data error is:", err.message));
    setNewPlant({
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
          value={newPlant.nickname || ""}
        />

        <input
          type="text"
          name="species"
          onChange={handleChanger}
          placeholder="Species Name"
          value={newPlant.species || ""}
        />

        <input
          type="number"
          name="frequency_value"
          onChange={handleChanger}
          placeholder="Frequency Value"
          value={newPlant.frequency_value || ""}
        />

        <input
          type="text"
          name="frequency_range"
          onChange={handleChanger}
          placeholder="Frequency Range "
          value={newPlant.frequency_range || ""}
        />

        <button>Add A New Plant Reminder</button>
      </form>
    </PlantsCardWrapper>
  );
};

export default PlantsCard;
