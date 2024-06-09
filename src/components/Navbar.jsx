import React from "react";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleLogin } from "../redux/uiSlice";

const Navbar = () => {
  const { isLoggedIn } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const handleLoginClick = () => {
    dispatch(toggleLogin());
  };

  return (
    <div className="navbar">
      <h1>Logo</h1>
      <button onClick={handleLoginClick}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Navbar;
