import React, { useState, useContext } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../context/UserContext";

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  justify-content: space-evenly;
  width: 100%;
  height: -500px;
  background-repeat: no-repeat;
  font-size: 30px;
  box-sizing: border-box;
  margin-top: 100px;

  span {
    color: #228b22;
  }

  hr.rounded {
    border-top: 3px solid green;
    border-radius: 5px;
    width: 1200px;
    margin-bottom: 130px;
  }

  h1 {
    text-align: center;
    margin: 40px 0 50px 0;
    font-size: 2.3rem;
    color: green;
  }

  .info {
    text-align: center;
    padding-top: 20px;
  }

  .update-form {
    margin: 50px 0 10px 0;
    text-align: center;
    label {
      font-size: 30px;
      input {
        font-size: 25px;
        padding-bottom: 30px;
      }
      
    }
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
    adding-top: 50px;
    width: auto;
    height: 400px;
  }
  button {
    margin: 40px 0 100px 0;
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
    margin-top: -90px;
   
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
  id: "",
  username: "",
  password: "",
  phoneNumber: "",
};

const UserCard = () => {
  const [editing, setEditing] = useState(false);
  const [userToEdit, setUserToEdit] = useState(initialUser);
  const { user, fetchUser } = useContext(UserContext);

  let history = useHistory();

  const editUser = (edit) => {
    setEditing(true);
    setUserToEdit(edit);
    fetchUser();
  };

  const updateUser = (e) => {
    e.preventDefault();
    setEditing(false);
    console.log("user id is:", userToEdit.id);

    axiosWithAuth()
      .put(`/users/${userToEdit.id}`, userToEdit)
      .then((res) => {
        console.log("This is the updateUser Response", res);
        // setUser(res.data);
        fetchUser();
        history.push("/userInfo");
      })
      .catch((err) => {
        console.log("This is the updateUser Error", err.message);
      });
  };

  const deleteUser = (info) => {
    axiosWithAuth()
      .delete(`/users/${info.id}`) //This is for the delete for user
      .then((res) => {
        console.log("This is the deleteUser Response", res);
        // setUser(res.data);
        fetchUser();
        history.push("/userInfo");
      })
      .catch((err) => {
        console.log("This is the deleteUser Error", err.message);
      });
  };

  console.log("User info: ", user);

  return (
    <UserWrapper>
      {editing ? (
        <form onSubmit={updateUser} className="update-form">
          <h1>Update User Profile</h1>
          <label>
            <span> Username: </span>
            <input
              type="text"
              name="username"
              onChange={(e) =>
                setUserToEdit({
                  ...userToEdit,
                  username: e.target.value,
                })
              }
              placeholder="Username"
              value={userToEdit.username}
            />
          </label>
          <label>
            <span> Password: {""}</span>
            <input
              type="text"
              name="password"
              onChange={(e) =>
                setUserToEdit({
                  ...userToEdit,
                  password: e.target.value,
                })
              }
              placeholder="password"
              value={userToEdit.password}
            />
          </label>
          <label>
            <span>Phone Number:</span>
            <input
              type="text"
              name="phoneNumber"
              onChange={(e) =>
                setUserToEdit({
                  ...userToEdit,
                  phoneNumber: e.target.value,
                })
              }
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
            <button onClick={() => setEditing(false)}>Cancel</button>
          </div>
        </form>
      ) : (
        <>
          <h1 id="main-title">User Profile</h1>

          <div className="info">
            {console.log("users", [user])}
            {[...user] &&
              [...user].reverse().map((u) => (
                <div key={u.id}>
                  <p>
                    <span>Username: </span>
                    {u.username}
                  </p>
                  <p>
                    <span>Password: </span>
                    {u.password}
                  </p>
                  <p>
                    <span>Phone Number: </span>
                    {u.phoneNumber}
                  </p>

                  <button onClick={() => editUser(u)}>Update</button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteUser(u);
                    }}
                  >
                    Delete
                  </button>
                  <hr class="rounded"></hr>
                </div>
              ))}
          </div>
        </>
      )}

      {/* <div className="spacer" /> */}
    </UserWrapper>
  );
};

export default UserCard;

