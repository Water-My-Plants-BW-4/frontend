import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
const NavContainer = styled.div`
    height: 70px;
    display: flex;
    padding-left: 219px;
    align-items: center;
    margin: 10px 10px 0 10px;
    background-color: lightgray;
    border-radius: 20px;

    h1 {
        color: green;
        font-size: 1.5rem;
        font-weight: 500;
        letter-spacing: 0.15rem;
        line-height: 1;
        margin: 2rem;
    }
    .nav {

        display: flex;
        margin: 20px;
        
        a {
          color: black;
            text-decoration: none;
            margin: 20px;

            &:hover{
              color: gray;
          }
        }
        
        a.active{
          color: gray;
          background: lightgray;
      }
   }
   .logout {
     color: red;
   }
}
`;


const Header = (props) => {
  const { auth } = useContext(AuthContext);

  const {go} = useHistory();

  return (
    <NavContainer>
      <h1><i className="fab fa-pagelines"></i>  Water My Plants</h1>
      <div className="nav">
       {!localStorage.getItem('token') ? <NavLink className="link" activeClassName="active" to="/login">
          Login
        </NavLink> : <Link className="logout" to="/" onClick={() => { 
          localStorage.clear()
         
          go(0)
          }}>Logout</Link>}
        <NavLink className="link" activeClassName="active" to="/signup">
          SignUp
        </NavLink>
        <a
          href=" https://watermyplantsbw4.netlify.app"
        >
          <span>About Us</span>
        </a>
        
        <NavLink to="/myplant">Home</NavLink>
      </div>
      <h1>{auth.message}</h1>
      {console.log("succesmsg", auth.message)}
    </NavContainer>
  );
};

export default Header;
