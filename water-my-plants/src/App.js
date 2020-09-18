import React, { useState } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "../src/components/Header";
import { UserContext } from "./context/UserContext";
import AddPlantsForm from "./components/AddPlantsForm";
import UserForm from "./components/UserForm";
import PrivateRoute from "./utils/PrivateRoute";
import PlantPage from "../src/components/PlantPage";



function App() {
  const [data, setData] = useState([])   //Data that will be passed to all components as value.

  // FE-1: Please add routes below in order display login

  return (
    <div className="App">
      <>
        <Header />
    
        <UserContext.Provider>
          <PrivateRoute exact path="/userInfo" component={UserForm} />
          <PrivateRoute exact path="/addPlants" component={AddPlantsForm} />
        </UserContext.Provider>
      <PrivateRoute path="/myplant" component={PlantPage} />
      </>

    </div>
  );
}

export default App;
