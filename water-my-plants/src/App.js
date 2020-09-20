import React, { useState } from "react";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "../src/components/Header";
import { UserContext } from "./context/UserContext";
import AddPlantsForm from "./components/AddPlantsForm";
import UserForm from "./components/UserForm";
import PrivateRoute from "./utils/PrivateRoute";
import PlantPage from "../src/components/PlantPage";
import SignupForm from "./components/SignUpForm";
import styled from "styled-components";
import img from "./img/greenleave.jpg";

function App() {
  const [user, setUser] = useState([]);
  //Bhawnish will use this for his context API
  const [plants, setPlants] = useState([]);

  return (
    <AppWrapper>
      <Header />

      <UserContext.Provider value={(user, setUser)}>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/userInfo" component={UserForm} />
        <Route path="/signup" component={SignupForm} />
      </UserContext.Provider>
      {/* will change Route to PrivateRoute when login authentication is modified */}
      <PrivateRoute path="/addPlants" component={AddPlantsForm} />
      <PrivateRoute path="/myplant" component={PlantPage} />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  overflow: hidden;
  margin: 0;
  width: 100%;
  height: 1400px;
  background-image: url(${img});
  background-size: cover;

  background-repeat: no-repeat;
  background-position: center;
  box-sizing: border-box;
  outline: none;
  font-family: "Karma", sans-serif;
`;

export default App;
