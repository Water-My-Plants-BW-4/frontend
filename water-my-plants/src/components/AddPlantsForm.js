import React, { useState, useEffect, useContext } from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";
import { PlantsContext } from '../context/PlantsContext';
import PlantsCard from "./PlantsCard";


const AddPlantsForm = () => {
    //aftert the useContext Plants is implemented, we dont need this anymore
    const {plantList, setPlantList} = useContext(PlantsContext)
    //   const [plants, setPlants] = useState([])
    const fetchPlants = () => {
        axiosWithAuth()
        .get("/plants") //I will add here the info from backend
        .then(res => {
            console.log("This is the fetchPlants response", res);
             setPlantList(res.data);
        })
        .catch(err => {
            console.log("This is the fetchPlants error", err.message);
        })
    };

    useEffect(() => {
        fetchPlants();
    }, []);

    return (
        <>
        <div>
            <PlantsCard plants={plantList} fetchPlants={fetchPlants} />
        </div>
        </>
    )
};

export default AddPlantsForm;