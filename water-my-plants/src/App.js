import React, { useState } from "react";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "../src/components/Header";
import { AuthContext } from "./context/AuthContext";
import AddPlantsForm from "./components/AddPlantsForm";
import UserForm from "./components/UserForm";
import PrivateRoute from "./utils/PrivateRoute";
import PlantPage from "../src/components/PlantPage";
import SignupForm from "./components/SignUpForm";
import styled from "styled-components";
import img from "./img/greenleave.jpg";

function App() {
  const [auth, setAuth] = useState([]);

  return (
    <AppWrapper>
      <Header />
      <AuthContext.Provider value={{ auth, setAuth }}>
        {/* Below Route is for the default URL */}
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route path="/signup" component={SignupForm} />
        <PrivateRoute exact path="/userInfo" component={UserForm} />
        <PrivateRoute path="/addPlants" component={AddPlantsForm} />
        <PrivateRoute path="/myplant" component={PlantPage} />
      </AuthContext.Provider>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  overflow: hidden;
  margin: 0;
  width: 100%;
  height: 1000px;
  background-image: url(${img});
  background-size: cover;

  background-repeat: no-repeat;
  background-position: center;
  box-sizing: border-box;
  outline: none;
  font-family: "Karma", sans-serif;
`;

export default App;
