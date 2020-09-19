import React, { useImperativeHandle, useState } from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

const initialState = {
    username: "",
    password: ""
}

const Login = () => {
  const [credentials, setCredentials] = useState(initialState)
//   const { push}  = useHistory();

//    const onSubmit = (e) => {
//        axiosWithAuth().post() - Post request to set up the token in localstorage
//        .then(res => {
        //    localStorage.setItem("token", res.data.payload)
//            console.log(res)
            //    push(/Plantpage)
           
//        })
//        .catch(err => console.log(err))

//        setCredentials({
//            username: "",
//            password: ""
//        })
//    }
   
  const handleChanges = (e) => {
    e.persist();
    setCredentials({...credentials, 
    [e.target.name]: e.target.value})
  }
    return(
       <LoginWrapper>
       
        <form>
        <div className="childrenDiv">
     

         <input
         placeholder="Username"
          name="username"
          value={credentials.username} 
          onChange={handleChanges}
          />


         
         <input 
         placeholder="Password"
         type="password"
         name="password" 
         value={credentials.password}  
         onChange={handleChanges}
         />
        
         <button type="submit">Login</button>
         </div>
        </form>
        
        </LoginWrapper>

    );

}

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  justify-content: space-evenly;
  width: 100%;
  height: 500px;
  font-size: 30px;
  box-sizing: border-box;

  .childrenDiv{
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
  button{
    margin-top: 50px;
    width: 240px;
    height: 30px;
    text-decoration: none;
    text-align: center;
    font-size: 20px;
    color: black;
    outline: none;
    font-family: "Bebas Neue", cursive;
  }

  input, textarea{
    
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

   :focus{
    border-bottom: 2px solid lightgray;
    background-color: lightgray;
    
   }
  }

`

export default Login;