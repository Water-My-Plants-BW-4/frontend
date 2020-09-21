import React, { useState, useEffect, useContext } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import UserCard from "../components/UserCard";
import { UserContext } from "../context/UserContext";




const UserForm = () => {
 const { user, setUser } = useContext(UserContext);
 
  const fetchUser = () => {
    axiosWithAuth()
      .get("/users/") 
      .then((res) => {
        console.log("This is the fetchUser response", res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.log("This is the fetchUser error", err.message);
      });
  };

  useEffect(() => {
    fetchUser();
  }, [user]);

  return (
    <>
      <div>
        <UserCard user={user} setUser={setUser} fetchUser={fetchUser} />
      </div>
    </>
  );
};

export default UserForm;
