import React, { useState, useEffect, useContext } from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";
import { UserContext } from '../context/UserContext';
import PlantsCard from "./PlantsCard"

const AddPlantsForm = () => {
    const [plants, setPlants] = useState([]);
    const { user } = useContext(UserContext);

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
            <PlantsCard user={user} plants={plants} fetchPlants={fetchPlants} />
        </div>
        </>
    )
};

export default AddPlantsForm;