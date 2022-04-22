import React from "react";
import classes from "../../assets/styles/Account.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "./../../context/AuthContext";

const Account = () => {
    const { currentUser, logOut } = useAuth();

    return (
        <>
            <div className={classes.account}>
                <span className="material-icons-outlined" title="Account">
                    account_circle
                </span>
                {currentUser && currentUser.displayName}
                {currentUser ? (
                    <span
                        className="material-icons-outlined"
                        title="Logout"
                        onClick={logOut}
                    >
                        {" "}
                        logout{" "}
                    </span>
                ) : (
                    <>
                        <Link to="/signup">SignUp</Link>
                        <Link to="/login">LogIn</Link>
                    </>
                )}
            </div>
        </>
    );
};

export default Account;
