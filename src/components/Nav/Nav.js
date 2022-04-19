import classes from "../../assets/styles/Nav.module.css";
import Logo from "../../assets/images/logo-bg.png";
import Account from "./Account";

const Nav = () => {
    return (
        <>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <a href="index.html" className={classes.brand}>
                            <img src={Logo} alt="Learn with Sumit Logo" />
                            <h3>Learn with Sumit</h3>
                        </a>
                    </li>
                </ul>
                
                <Account />
            </nav>
        </>
    );
};

export default Nav;
