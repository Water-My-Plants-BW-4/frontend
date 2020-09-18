import React, { useState, useContext } from "react";
import styled from "styled-components";

const initialState = {
    username: "",
    password:""
}

const Login = () => {
    const [credentials, setCredentials] = useState(initialState)
   

    //Post request for the token will go here

    const handleChanges = (e) => {
        e.persist();
     setCredentials({ ...credentials,
         [e.target.name]: e.target.value
        })
    };

    return(
       <>
        <form>
         <input 
         type="text" 
         name="username" 
         value={credentials.username}
         onChange={handleChanges} />

         <input 
         type="text" 
         name="password" 
         value={credentials.password} 
         onChange={handleChanges} />
         
         <button type="submit">Login</button>
        </form>

       </>

    )
}

export default Login;