import React, { useState, useContext } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { UserContext } from "../context/UserContext";
import styled from "styled-components";

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  justify-content: space-evenly;
  width: 100%;
  height: 200px;
  font-size: 30px;
  box-sizing: border-box;
  margin-top: 200px;

  h1 {
    text-align: center;
    margin: 40px 0 10px 0;
    font-size: 2.3rem;
    color: green;
  }

  .info {
      text-align:center;
      padding-top: -70px;
  }

  .update-form{
      padding: 150px 0 0 0;
      text-align: center;
  }

  #main-title {
    margin-top: 60px;
  }

  .childrenDiv {
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 40%;
    margin-right: 40%;
    width: auto;
    height: 400px;
  }
  button {
    margin-top: 40px;
    width: 280px;
    height: 40px;
    padding: 5px;
    text-decoration: none;
    text-align: center;
    font-size: 20px;
    color: black;
    outline: none;
    font-family: "Bebas Neue", cursive;
  }

  label,
  input,
  textarea {
    outline: none;
    border: 0;
    margin: 0;
    text-align: center;
    font-size: 20px;
    margin-top: 20px;
    width: 200px;
    height: 50px;
    transition: all 0.9s;
    background-color: transparent;

    :focus {
      border-bottom: 2px solid lightgray;
      background-color: lightgray;
    }
  }
`;

const initialUser = {
  username: "",
  password: "",
  phoneNumber: "",
};

const UserCard = ({ user, fetchUser }) => {
  const [editing, setEditing] = useState(false);
  const [userToEdit, setUserToEdit] = useState(initialUser);
//   const { user } = useContext(UserContext);

  const editUser = (edit) => {
    setEditing(true);
    setUserToEdit(edit);
  };

  //   const reset = () => {
  //     setUsers(initialUser);
  //     setEditing(false);
  //     fetchUser();
  //   };

  const updateUser = () => {
    console.log("user id is:", user.id);
    axiosWithAuth()
      .put(user) // will add here a put for updatefor user
      .then((res) => {
        console.log("This is the updateUser Response", res);
        setUserToEdit(res.data);
        fetchUser();
      })
      .catch((err) => {
        console.log("This is the updateUser Error", err.message);
      });
  };

  const deleteUser = (info) => {
    axiosWithAuth()
      .delete() //This is for the delete for user
      .then((res) => {
        console.log("This is the deleteUser Response", res);
        setUserToEdit(res.data);
        fetchUser();
      })
      .catch((err) => {
        console.log("This is the deleteUser Error", err.message);
      });
  };

  const handleChanger = (e) => {
    setUserToEdit({ ...userToEdit, [e.target.name]: e.target.value });
  };

  console.log("User info: ", user);

  return (
    <UserWrapper>
        {editing && (
        <form onSubmit={updateUser} className='update-form'>
            <h1>Update User Profile</h1>
          <label>
            Username:
            <input
              type="text"
              name="username"
              onChange={handleChanger}
              placeholder="Username"
              value={userToEdit.username}
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              name="password"
              onChange={handleChanger}
              placeholder="password"
              value={userToEdit.password}
            />
          </label>
          <label>
            Phone Number:
            <input
              type="text"
              name="phoneNumber"
              onChange={handleChanger}
              placeholder="phoneNumber"
              value={userToEdit.phoneNumber}
            />
          </label>
          <div className="button-row">
            <button
              type="submit"
              onClick={(e) => {
                updateUser(e);
              }}
            >
              Save
            </button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <h1 id="main-title">User Profile</h1>
      <>
        <div className="info">
          <span>
            <p>Username: {user.username}</p>
            <p>Password: {user.password}</p>
            <p>Phone Number: {user.phoneNumber}</p>
          </span>
          <button
          onClick={(e) => editUser(e)} >
            Update
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteUser(e);
            }}
          >
            Delete
          </button>
        </div>
      </>
      

      {/* <div className="spacer" /> */}
    </UserWrapper>
  );
};

export default UserCard;
