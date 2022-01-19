import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import classes from "../styles/Account.module.css";

const Account = () => {
  const { authUser, logout } = useAuth();

  return (
    <div className={classes.account}>
      {authUser ? (
        <>
          <span
            className="material-icons-outlined cursor-pointer"
            title="Account"
          >
            account_circle
          </span>
          <span>{authUser.displayName}</span>
          <span
            className="material-icons-outlined cursor-pointer"
            title="Logout"
            onClick={logout}
          >
            logout
          </span>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
};

export default Account;
