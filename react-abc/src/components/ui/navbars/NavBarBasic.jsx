import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import ButtonBasic from "../buttons/ButtonBasic";

const NavBarBasic = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <div className="navbar">
      {isAuth && (
        <Fragment>
          <ButtonBasic onClick={logout}>Log out</ButtonBasic>
          <div className="navbar__links">
            <Link to="/about">About</Link>
            <Link to="/posts">Posts</Link>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default NavBarBasic;
