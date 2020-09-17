import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
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
            text-decoration: none;
            margin: 20px;
        }
    }
}
`;

const Header = (props) => {
  return (
    <NavContainer>
      <h1>Water My Plants</h1>
      <div className="nav">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">SignUp</NavLink>
      </div>
    </NavContainer>
  );
};

export default Header;
