import React from 'react';
import classes from "../../assets/styles/Button.module.css";
const Button = ({ children, className, ...rest }) => {
    return (
        <>
            <button className={`${classes.button} ${className}`} {...rest}>{children}</button>
        </>
    );
};

export default Button;
