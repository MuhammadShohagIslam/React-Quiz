import React from 'react';
import classes from "../../assets/styles/Nav.module.css";
import Logo from "../../assets/images/logo-bg.png";
import Account from "./Account";
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link to="/" className={classes.brand}>
                            <img src={Logo} alt="Learn with Sumit Logo" />
                            <h3>Learn with Sumit</h3>
                        </Link>
                    </li>
                </ul>
                
                <Account />
            </nav>
        </>
    );
};

export default Nav;
