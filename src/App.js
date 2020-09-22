import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "../src/components/Header";
import { AuthContext } from "./context/AuthContext";
import { PlantsContext } from "./context/PlantsContext";
import AddPlantsForm from "./components/AddPlantsForm";
import UserForm from "./components/UserForm";
import PrivateRoute from "./utils/PrivateRoute";
import PlantPage from "../src/components/PlantPage";
import SignupForm from "./components/SignUpForm";
import styled from "styled-components";
import img from "./img/greenleave.jpg";
import  axiosWithAuth  from "./utils/axiosWithAuth";

function App() {
  const [auth, setAuth] = useState([]);
  const [plantList, setPlantList] = useState([]);

  
      

  
 useEffect(() => {
    axiosWithAuth()
       .get("/plants")
       .then((res) => {
         console.log("this is the response:", res);
         setPlantList(res.data);
       })
       .catch((err) => {
         console.error("the Erros is:", err);
       });
   }, []);
 
 
  
  return (
    <AppWrapper>
      
     
     <AuthContext.Provider value={{ auth, setAuth }}>
      <Header />
    
        {/* Below Route is for the default URL */}
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route path="/signup" component={SignupForm} />

        <PrivateRoute exact path="/userInfo" component={UserForm} />
        <PrivateRoute path="/addPlants" component={AddPlantsForm} />
        <PrivateRoute path="/myplant" component={PlantPage} />
      {/* will change Route to PrivateRoute when login authentication is modified */}
      <PlantsContext.Provider value={{plantList, setPlantList}}>
      <PrivateRoute path="/addPlants" component={AddPlantsForm} />
      <PrivateRoute path="/myplant" component={PlantPage} />
      </PlantsContext.Provider>
     </AuthContext.Provider>
      
   

    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  margin: 0;
  width: 100%;
  height: 1000px;
  background-image: url(${img});
  background-size: cover;
  overflow: scroll;
  background-repeat: no-repeat;
  background-position: center;
  box-sizing: border-box;
  outline: none;
  font-family: "Karma", sans-serif;
`;

export default App;
