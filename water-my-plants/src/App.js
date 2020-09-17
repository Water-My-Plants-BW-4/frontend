import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import PrivateRoute from "./utils/PrivateRoute";
import PlantPage from "./components";
function App() {
  return (
    <div className="App">
       <PrivateRoute path="/myplant" component={PlantPage} />



    </div>
  );
}

export default App;
