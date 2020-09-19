import React, { useState, useEffect, useContext } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import UserCard from "../components/UserCard";
import { UserContext } from "../context/UserContext";


const dummyData = {
    id: 1,
    username: "user",
    password: "abc123",
    phoneNumber: "999-999-9999"
}

const UserForm = () => {
  const [user, setUser] = useState(dummyData);
//   const { user, setUser } = useContext(UserContext);

//   const fetchUser = () => {
//     axiosWithAuth()
//       .get(/dummyData/) //I will add here the info from backend
//       .then((res) => {
//         console.log("This is the fetchUser response", res);
//         setUser(res.data);
//       })
//       .catch((err) => {
//         console.log("This is the fetchUser error", err.message);
//       });
//   };

//   useEffect(() => {
//     fetchUser();
//   }, []);

  return (
    <>
      <div>
        <UserCard user={user} setUser={setUser}  />
      </div>
    </>
  );
};

export default UserForm;
