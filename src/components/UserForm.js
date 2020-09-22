import React, { useContext } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import UserCard from "../components/UserCard";
import { UserContext } from "../context/UserContext";
import { useHistory } from "react-router-dom";



const UserForm = () => {
 const { user, setUser } = useContext(UserContext);
//  const [user, setUser] = useState([])


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
  }, []);

  return (
    <>
      <div>
        <UserCard user={user} setUser={setUser} fetchUser={fetchUser} />
      </div>
    </>
  );
};

export default UserForm;
