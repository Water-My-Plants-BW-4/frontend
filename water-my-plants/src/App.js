import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import { UserContext } from "./context/UserContext";
import AddPlantsForm from "./components/AddPlantsForm";
import UserForm from "./components/UserForm";

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <UserContext.Provider>
          <PrivateRoute exact path="/userInfo" component={UserForm} />
          <PrivateRoute exact path="/addPlants" component={AddPlantsForm} />
        </UserContext.Provider>
      </>
    </div>
  );
}

export default App;
