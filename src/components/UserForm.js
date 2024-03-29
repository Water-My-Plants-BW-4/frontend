import React, { useEffect, useContext } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import UserCard from "../components/UserCard";
import { UserContext } from "../context/UserContext";

const UserForm = () => {
const { user, setUser} = useContext(UserContext);
const id = localStorage.getItem("userID");

  const fetchUser = () => {
    axiosWithAuth()
    //to get all users list
      // .get('users')
      .get(`/users/${id}`)
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
        <UserCard user={user} fetchUser={fetchUser} />
    </>
  );
};

export default UserForm;
