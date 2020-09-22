import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import UserCard from "../components/UserCard";
import { UserContext } from "../context/UserContext";

const UserForm = () => {
  const [user, setUser] = useState([]);

  const fetchUser = () => {
    axiosWithAuth()
      .get("/users")
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
  }, []);

  return (
    <>
    <h1>Update</h1>
      <div>
        <UserContext.Provider value={{ user, fetchUser }}>
          <UserCard />
        </UserContext.Provider>
      </div>
    </>
  );
};

export default UserForm;
