import React from 'react'
import { Outlet,NavLink } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <span style={{ width: "50%" }}>
        {" "}
        <NavLink to="/">Login</NavLink>{" "}
      </span>
      <span style={{ width: "50%" }}>
        <NavLink to="/about">Register</NavLink>
      </span>
      <Outlet />
    </div>
  );
}

export default Main;