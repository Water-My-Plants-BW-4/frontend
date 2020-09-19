import React, { useState, useEffect, useContext } from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";
// import { PlantsContext } from '../context/UserContext';
import PlantsCard from "./PlantsCard";


const AddPlantsForm = () => {
    //aftert the useContext Plants is implemented, we dont need this anymore
    const [plants, setPlants] = useState([]);
     //const { plants } = useContext(PlantsContext);

    const fetchPlants = () => {
        axiosWithAuth()
        .get() //I will add here the info from backend
        .then(res => {
            console.log("This is the fetchPlants response", res);
            setPlants();
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
            <PlantsCard plants={plants} fetchPlants={fetchPlants} />
        </div>
        </>
    )
};

export default AddPlantsForm;