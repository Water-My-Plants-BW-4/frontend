import React, { useState } from "react";
import styled from "styled-components";

const initialState = {
    username: "",
    password: ""
}

const Login = () => {
  const [credentials, setCredentials] = useState(initialState)
  
    return(
       <>
        <form>
         <input name="username" value="" onChange=""/>

         <input name="password" value="" onChange=""/>

        </form>

       </>

    )
}

export default Login;