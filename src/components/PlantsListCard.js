import React, {useState} from "react";
import styled from "styled-components";
import img from "../img/cardBg.jpg";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

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
.list {
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
    border: 2px solid green;
    border-radius: 80px;
    width: 500px;
    height: 300px;
    margin: 30px 368px;
    padding: -90px 0 40px 0;
}
.child{
  backdrop-filter: blur(5px);  
  -webkit-backdrop-filter: blur(5px);
  margin: 0px 70px 0 70px;
}

.btn{
  display: flex;
  justify-content: center;
}
.updBtn{
  margin-right: 10px;
}
`;
const defaultValue = {
  nickname: "", 
	species: "", 
	frequency_value: "", 
	frequency_range: ""
}

const PlantListCard = (props) => {
   const { go } = useHistory();
   const [editing, setEditing] = useState(false);
   const [editPlant, setEditPlant] = useState(defaultValue)
   const user_id = localStorage.getItem("userID")

   const getPlants = (id) => {
   axiosWithAuth()
   .get(`/plants/${user_id}/${id}`)
   .then((res) => {
     console.log("getplants ran", res.data[0].nickname)
    setEditPlant({...editPlant, 
      nickname: res.data[0].nickname,
      species: res.data[0].species, 
      frequency_value: res.data[0].frequency_value, 
      frequency_range: res.data[0].frequency_range
    })
  })
   .catch((err) => {
     console.log(err)
   })
   };

  const deletePlant = (id) => {
   axiosWithAuth()
   .delete(`/plants/${id}`)
   .then((res) => {
     console.log("RES from delete", res)
     go(0);
   })
   .catch((err) => {
   console.log(err)
   })
  }

  const updatePlant = (id) => {
    axiosWithAuth()
    .put(`/plants/${id}`, editPlant)
    .then((res) => {
      console.log(res)
      go(0);
    })
    .catch((err) => {
      console.log("err from update,", err)
    })
  }

  const handleChanger = (e) => {
    setEditPlant({ ...editPlant,
       [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditPlant({...editPlant, 
    [e.target.name]: e.target.value})
  };

  return (
    <>
    {!editing &&
    <PlantsCardWrapper>
       
      <h1>#{props.i}</h1>
        <div className="list">
       
      <div className="child">
        <p>Nickname: {props.nickname}</p>
      </div>
      <div  className="child">
        <p>Species: {props.species}</p>
      </div>
      <div  className="child">
        <p>Frequency Value: {props.frequency_value}</p>
      </div>
      <div  className="child">
        <p>Frequency Range: {props.frequency_range}</p>
      </div>
      </div>
      <div className="btn">
       <button className="updBtn" onClick={() => {
            setEditing(true)
            getPlants(props.id)
             }}>Update</button>
       <button className="delBtn" onClick={() => deletePlant(props.id)}>Delete</button>
       </div> 
         
       
         
    </PlantsCardWrapper>
          }
          {editing && 
          <PlantsCardWrapper>
              <h1>Update Plant</h1>
            <form className="childrenDiv" 
            onSubmit={handleSubmit}>
             
             
            <input
              type="text"
              name="nickname"
              onChange={handleChanger}
              placeholder="Plants Name"
              value={editPlant.nickname || ''} 
            />
    
            <input
              type="text"
              name="species"
              onChange={handleChanger}
              placeholder="Species Name"
              value={editPlant.species || ''}
            />
    
            <input
              type="number"
              name="frequency_value"
              onChange={handleChanger}
              placeholder="Frequency Value"
              value={editPlant.frequency_value || ''}
            />
    
            <input
              type="text"
              name="frequency_range"
              onChange={handleChanger}
              placeholder="Frequency Range "
              value={editPlant.frequency_range || ''}
            />
    
            <button onClick={() =>  updatePlant(props.id)}>
             update!
            </button>
          </form>
          </PlantsCardWrapper>
           }
    </>
  );
};

export default PlantListCard;
