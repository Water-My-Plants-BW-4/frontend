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
    setCredentials({...credentials, 
    [e.target.name]: e.target.value})
  }
    return(
       <>
        <form>
         <input
          name="username"
          value={credentials.username} 
          onChange={handleChanges}
          />

         <input 
         type="password"
         name="password" 
         value={credentials.password}  
         onChange={handleChanges}
         />
         <button type="submit">Login</button>
        </form>

       </>

    )
}

export default Login;