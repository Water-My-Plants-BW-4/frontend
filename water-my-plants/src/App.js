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
  const [user, setUser] = useState([]);
  return (
    <div className="App">
      <>
        <Header />
        <UserContext.Provider value={(user, setUser)}>
          <PrivateRoute exact path="/userInfo" component={UserForm} />
          <Route exact path="/addPlants" component={AddPlantsForm} />
        </UserContext.Provider>
        <PrivateRoute path="/myplant" component={PlantPage} />
      </>
    </div>
  );
}

export default App;
