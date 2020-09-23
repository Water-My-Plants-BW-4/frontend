import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import UserCard from "../components/UserCard";
import { UserContext } from "../context/UserContext";

const UserForm = () => {
<<<<<<< HEAD:src/components/UserForm.js
  const [user, setUser] = useState([]);

=======
 const { user, setUser } = useContext(UserContext);
 
>>>>>>> dev:water-my-plants/src/components/UserForm.js
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
<<<<<<< HEAD:src/components/UserForm.js
    
  }, []);
=======
  }, [user]);
>>>>>>> dev:water-my-plants/src/components/UserForm.js

  return (
    <>
      <div>
        <UserContext.Provider value={{ user, fetchUser }}>
          <UserCard />
        </UserContext.Provider>
      </div>
    </>
  );
};

export default UserForm;
