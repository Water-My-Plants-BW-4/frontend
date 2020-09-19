import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
    height: 70px;
    display: flex;
    justify-content: space-between;
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
}
`;

const Header = (props) => {
  return (
    <NavContainer>
      <h1>Water My Plants</h1>
      <div className="nav">
        <NavLink className="link" activeClassName="active" to="/login">
          Login
        </NavLink>
        <NavLink className="link" activeClassName="active" to="/signup">
          SignUp
        </NavLink>
        <a
        // Here we will put link UI href=""
        >
          <span>Home</span>
        </a>
        <NavLink to="/myPlant">Profile</NavLink>
      </div>
    </NavContainer>
  );
};

export default Header;
